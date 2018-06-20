import React from 'react';
import { view } from 'react-easy-state';
import { store } from '../../../lib';

const withFormData = (formName) => {
	return (WrappedComponent) => {
		return view((props) => {
      const { forms = {} } = store;
      const currentForm = forms[formName] || {};  
      const setFormData = (fields) => {
        currentForm.data = fields;
      }
      return <WrappedComponent {...props} formData={currentForm.data} />;
		})
	};
};

export default withFormData;
