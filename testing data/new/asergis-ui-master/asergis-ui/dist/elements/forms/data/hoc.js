'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEasyState = require('react-easy-state');

var _lib = require('../../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withFormData = function withFormData(formName) {
  return function (WrappedComponent) {
    return (0, _reactEasyState.view)(function (props) {
      var _store$forms = _lib.store.forms,
          forms = _store$forms === undefined ? {} : _store$forms;

      var currentForm = forms[formName] || {};
      var setFormData = function setFormData(fields) {
        currentForm.data = fields;
      };
      return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, props, { formData: currentForm.data }));
    });
  };
};

exports.default = withFormData;