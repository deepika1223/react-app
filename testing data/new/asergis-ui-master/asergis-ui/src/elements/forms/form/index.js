import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import FormView from './Form';
import lifecycle from 'react-pure-lifecycle';
import validation from '../data/validation';
import { store, withLifecycle } from '../../../lib';
import { format } from 'path';

const FormMethods = {
  componentDidMount({ name, defaultValues = {} }) {
    store.forms[name] = {data: defaultValues, fields: {}, errors: {}, customError: null};
  }
};

const Form = (props) => {
  const { onSubmit, children, name, mutate, forms =[] } = props;
  const formId = name;
  const currentForm = store.forms[name] || {};
  const { customError, errors = {}, data = {}, fields = {}} = currentForm;

  const methods = {
    setFieldValue(name, value, group) {
      if (group){
        let fieldData = data[group] || [];
        let fieldIndex = fieldData.findIndex(el => el === name);
        if (value){
          if (fieldIndex >=0) {
            fieldData[fieldIndex] = name;
          } else {
            fieldData.push(name);
          }
        } else {
          fieldIndex >= 0 && fieldData.splice(fieldIndex, 1);
        }
        currentForm.data = {...(currentForm.data), [group]: fieldData};
      } else {
        let formData = data;
        if (value) {
          formData[name] = value
        } else {
          delete formData[name];
        }
        currentForm.data = {...formData};
      }
    },
    setFormArrValues(arr, index, name, value){
      console.log('arrParams', arr, index, name, value)

      let fieldData = data[arr] || [];
      if (value) {
        console.log('fieldData[index]', fieldData[index])
        let itemData = fieldData[index] ? {...fieldData[index], [name]: value} : {[name]: value}
        fieldData[index] = itemData
      }
      currentForm.data = {...(currentForm.data), [arr]: fieldData};
      console.log('currentForm.data', currentForm.data)

    },
    setValidationRules(attr) {
      const validators = Object.keys(validation);
      const { name, label, arr } = attr;
      fields[name] = {
        label,
        arr,
        validationRules: Object.keys(attr)
            .filter(function(rule) {
              return validators.some((element) => element === rule);
            })
            .map((rule) => ({ rule, param: attr[rule] }))
      }
    },
    onChange(event) {
      console.log('event && event.target', event.target.attributes)
      const { target: { attributes: { group, arr, index, dependencies = [] }, type, name, value, checked } } = event;

      const isCheckbox = type === 'checkbox';
      const groupName = group && group.value;
      const fieldValue = isCheckbox ? checked : value;

      if(arr){
        methods.setFormArrValues(arr.value || arr, index.value || index, name, fieldValue)
        return
      }

       methods.setFieldValue(name, fieldValue, groupName);

      // if (groupName){
      //   let fieldData = data[groupName] || [];
      //   let fieldIndex = fieldData.findIndex(el => el === name);
      //   if (fieldValue){
      //     if (fieldIndex >=0) {
      //       fieldData[fieldIndex] = name;
      //     } else {
      //       fieldData.push(name);
      //     }
      //   } else {
      //     fieldIndex >= 0 && fieldData.splice(fieldIndex, 1);
      //   }
      //   currentForm.data = {...(currentForm.data), [groupName]: fieldData};
      // } else {
      //   let formData = data;
      //   if (fieldValue) {
      //     formData[name] = fieldValue
      //   } else {
      //     delete formData[name];
      //   }
      //   currentForm.data = {...formData};
        
      // }
      
      for (let i=0; i< dependencies.length; i++) {
        delete data[dependencies[i]];
      }

      if (errors && errors.hasOwnProperty(name)) {
        delete errors[name];
      }
    }
  };

  const childrenWithProps = (children) => {
    return React.Children.map(children, child => {
      if (!child || !child.props) return child;
      const { name, group } = child.props;
      const error = name && errors[name] && {errorMessage: errors[name]};

      let childProps = {};
      if (React.isValidElement(child) && child.props) {
        let value = group ? (data[group] && Object.values(data[group] || {}).find(el => el == name)) : data[name];
        childProps = {...(child.props), methods, error, value};
      }
      if (child.props) {
        childProps.children = childrenWithProps(child.props.children);
        return React.cloneElement(child, childProps);
      }
      return child;
    });
  };

  const fieldsWithProps = childrenWithProps(children);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let invalid = false;

    for (let fieldName in fields) {
      let fieldData = fields[fieldName];
      const value = data[fieldName];
      if (fieldData.hasOwnProperty('validationRules')) {
        let { label, validationRules } = fieldData;
        if(fieldData.arr && data[fieldData.arr]){
          let valuesArr = data[fieldData.arr]
          valuesArr.forEach(item => {
            let value = item && item.value
            for (let { rule, param } of validationRules) {
              let validationResult = validation[rule](label, value, param);
              if (validationResult) {
                invalid = true;
                errors[fieldName] = validationResult;
              }
            }
          })
        } else {

          for (let { rule, param } of validationRules) {
            let validationResult = validation[rule](label, value, param);
            if (validationResult) {
              invalid = true;
              errors[fieldName] = validationResult;
            }
          }

        }

      }
    }

    if (!invalid) {
      const { error } = (onSubmit && await onSubmit(data)) || {};

      if (error){

        let fieldName = null;
        let errorMessage = error.replace(/".*?"/g, (el) => {
          fieldName = el.replace(/"/g, '')
          return (fields[fieldName] || {}).label;
        });
        
        currentForm.customError = errorMessage;

      } else {
        //TODO: reset form data
        // data = {};
      }
    }
  };

  return <FormView id={formId} children={fieldsWithProps} handleSubmit={handleSubmit} name={name} customError={customError} />;
};

Form.propTypes = {
  name: PropTypes.string.isRequired
};

export default lifecycle(FormMethods)(view(Form))
