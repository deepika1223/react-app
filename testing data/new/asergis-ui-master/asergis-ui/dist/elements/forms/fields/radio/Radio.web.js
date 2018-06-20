'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  position: relative;\n  &:after {\n    content: \'\';\n  }\n'], ['\n  display: inline-block;\n  position: relative;\n  &:after {\n    content: \'\';\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n'], ['\n  display: inline-block;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n  margin-bottom: 0;\n  cursor: pointer;\n  input {\n    display: none;\n    & + ', ' {\n      width: 18px;\n      min-width: 18px;\n      min-height: 18px;\n      background: #ffffff;\n      border: 2px solid #d4d0d0;\n      border-radius: 50%;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      margin-right: 10px;\n      vertical-align: bottom;\n      &:after {\n        width: 0;\n        height: 0;\n        background: #0085bf;\n        border-radius: 50%;\n        transition: width 0.3s ease-in, height 0.3s ease-in;\n      }\n    }\n    &:checked {\n      & + ', ' {\n        border: 2px solid #0085bf;\n        &:after {\n          width: 8px;\n          height: 8px;\n        }\n      }\n    }\n  }\n'], ['\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n  margin-bottom: 0;\n  cursor: pointer;\n  input {\n    display: none;\n    & + ', ' {\n      width: 18px;\n      min-width: 18px;\n      min-height: 18px;\n      background: #ffffff;\n      border: 2px solid #d4d0d0;\n      border-radius: 50%;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      margin-right: 10px;\n      vertical-align: bottom;\n      &:after {\n        width: 0;\n        height: 0;\n        background: #0085bf;\n        border-radius: 50%;\n        transition: width 0.3s ease-in, height 0.3s ease-in;\n      }\n    }\n    &:checked {\n      & + ', ' {\n        border: 2px solid #0085bf;\n        &:after {\n          width: 8px;\n          height: 8px;\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Span = _styledComponents2.default.span(_templateObject);

var RadioGroup = _styledComponents2.default.div(_templateObject2);

var Wrap = _styledComponents2.default.label(_templateObject3, Span, Span);

{/* <Radio key={option.value} value={option.value}>{option.label}</Radio> */}
var Radio = function Radio(_ref) {
  var label = _ref.label,
      className = _ref.className,
      value = _ref.value,
      options = _ref.options,
      props = (0, _objectWithoutProperties3.default)(_ref, ['label', 'className', 'value', 'options']);

  return _react2.default.createElement(
    RadioGroup,
    null,
    options && options.map(function (option) {
      return _react2.default.createElement(
        Wrap,
        { className: className, key: option.value },
        _react2.default.createElement('input', (0, _extends3.default)({ type: 'radio' }, props, { value: option.value, checked: option.value === value })),
        _react2.default.createElement(Span, null),
        option.label
      );
    })
  );
};

exports.default = Radio;