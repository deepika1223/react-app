/*
  https://github.com/chriso/validator.js
*/

import validator from 'validator';

export default {
  required(label, value, param) {
    return (param && (!value || validator.isEmpty(value)) &&
      `${label} is required`);
  },
  min(label, value, param) {
    return (value && !validator.isFloat(value, {min: param})) && 
      `${label} must be at least ${param}`;
  },
  max(label, value, param){
    return (value && !validator.isFloat(value, {max: param})) && 
      `${label} cannot exceed ${param}`;
  },
  minLength(label, value, param) {
    return (value && !validator.isLength(value, {min: param, max: undefined})) && 
      `${label} must be at least ${param} characters`;
  },
  maxLength(label, value, param){
    return (value && !validator.isLength(value, {min: undefined, max: param})) && 
      `${label} cannot exceed ${param} characters`;
  },
  datatype(label, value, param){
    let result;
    switch (param) {
      case 'email':
      result = (value && !validator.isEmail(value)) && 
        `Incorrect email format`;
        break;
    }
    return result;
  }
};
