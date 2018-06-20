'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  required: function required(label, value, param) {
    return param && (!value || _validator2.default.isEmpty(value)) && label + ' is required';
  },
  min: function min(label, value, param) {
    return value && !_validator2.default.isFloat(value, { min: param }) && label + ' must be at least ' + param;
  },
  max: function max(label, value, param) {
    return value && !_validator2.default.isFloat(value, { max: param }) && label + ' cannot exceed ' + param;
  },
  minLength: function minLength(label, value, param) {
    return value && !_validator2.default.isLength(value, { min: param, max: undefined }) && label + ' must be at least ' + param + ' characters';
  },
  maxLength: function maxLength(label, value, param) {
    return value && !_validator2.default.isLength(value, { min: undefined, max: param }) && label + ' cannot exceed ' + param + ' characters';
  },
  datatype: function datatype(label, value, param) {
    var result = void 0;
    switch (param) {
      case 'email':
        result = value && !_validator2.default.isEmail(value) && 'Incorrect email format';
        break;
    }
    return result;
  }
}; /*
     https://github.com/chriso/validator.js
   */