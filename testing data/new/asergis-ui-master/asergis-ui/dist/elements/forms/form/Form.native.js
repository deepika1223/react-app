'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _nativeBase = require('native-base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormView = function FormView(props) {
  var handleSubmit = props.handleSubmit,
      fieldsWithProps = props.fieldsWithProps,
      children = props.children,
      name = props.name;


  return _react2.default.createElement(
    _nativeBase.Form,
    { onSubmit: handleSubmit, id: name, noValidate: true },
    children
  );
};

exports.default = FormView;