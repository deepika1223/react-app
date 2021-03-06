"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormView = function FormView(props) {
  var handleSubmit = props.handleSubmit,
      fieldsWithProps = props.fieldsWithProps,
      customError = props.customError,
      children = props.children,
      name = props.name;


  return _react2.default.createElement(
    "form",
    { onSubmit: handleSubmit, id: name, noValidate: true },
    customError && _react2.default.createElement(
      "p",
      { className: "text-danger" },
      customError
    ),
    children
  );
};

exports.default = FormView;