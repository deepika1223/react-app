'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = exports.SearchInput = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #0185be;\n  border-radius: 50px;\n  padding: 10px 20px;\n  border-color: #0185be;\n  ::placeholder {\n    color: #fff;\n    font-weight: 300;\n    font-size: 14px;\n    opacity: 1;\n  }\n  & + .search {\n    color: #fff;\n    top: 12px;\n  }\n'], ['\n  background-color: #0185be;\n  border-radius: 50px;\n  padding: 10px 20px;\n  border-color: #0185be;\n  ::placeholder {\n    color: #fff;\n    font-weight: 300;\n    font-size: 14px;\n    opacity: 1;\n  }\n  & + .search {\n    color: #fff;\n    top: 12px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../../../icons');

var _icons2 = _interopRequireDefault(_icons);

var _decorators = require('../../decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchInput = exports.SearchInput = _decorators.FormControl.extend(_templateObject);

var Textarea = exports.Textarea = _decorators.FormControl.withComponent('textarea');

var Input = function Input(_ref) {
  var type = _ref.type,
      label = _ref.label,
      value = _ref.value,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      required = _ref.required,
      error = _ref.error,
      props = (0, _objectWithoutProperties3.default)(_ref, ['type', 'label', 'value', 'name', 'onChange', 'placeholder', 'required', 'error']);

  return _react2.default.createElement(
    _decorators.FormGroup,
    (0, _extends3.default)({}, props, { validation: error }),
    label && _react2.default.createElement(
      _decorators.Label,
      null,
      label,
      required && _react2.default.createElement(_decorators.Star, null)
    ),
    type === 'search' ? _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(SearchInput, {
        type: 'text',
        name: name,
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        validation: error
      }),
      _react2.default.createElement(_icons2.default, { icon: 'search', className: 'search' })
    ) : _react2.default.createElement(_decorators.FormControl, {
      type: type,
      name: name,
      value: value,
      onChange: onChange,
      placeholder: placeholder,
      validation: error
    }),
    error && _react2.default.createElement(
      _decorators.HelpLabel,
      null,
      error.errorMessage
    )
  );
};

exports.default = Input;