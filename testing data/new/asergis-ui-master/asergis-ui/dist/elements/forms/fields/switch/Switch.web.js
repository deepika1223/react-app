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
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n  margin-bottom: 0;\n  cursor: pointer;\n  input {\n    display: none;\n    & + ', ' {\n      width: 60px;\n      height: 28px;\n      border: 2px solid #d4d0d0;\n      border-radius: 20px;\n      &:after {\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        left: 2px;\n        top: 2px;\n        border-radius: 50%;\n        display: inline-block;\n        background-color: #d4d0d0;\n        transform: translateX(0);\n        transition: transform 0.3s, background 0.3s, border 0.3s;\n      }\n    }\n    &:checked {\n      & + ', ' {\n        border: 2px solid #0085bf;\n        &:after {\n          background-color: #0085bf;\n          transform: translateX(32px);\n        }\n      }\n    }\n  }\n'], ['\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n  margin-bottom: 0;\n  cursor: pointer;\n  input {\n    display: none;\n    & + ', ' {\n      width: 60px;\n      height: 28px;\n      border: 2px solid #d4d0d0;\n      border-radius: 20px;\n      &:after {\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        left: 2px;\n        top: 2px;\n        border-radius: 50%;\n        display: inline-block;\n        background-color: #d4d0d0;\n        transform: translateX(0);\n        transition: transform 0.3s, background 0.3s, border 0.3s;\n      }\n    }\n    &:checked {\n      & + ', ' {\n        border: 2px solid #0085bf;\n        &:after {\n          background-color: #0085bf;\n          transform: translateX(32px);\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Span = _styledComponents2.default.span(_templateObject);

var Wrap = _styledComponents2.default.label(_templateObject2, Span, Span);

var Switch = function Switch(_ref) {
  var label = _ref.label,
      children = _ref.children,
      value = _ref.value,
      className = _ref.className,
      inline = _ref.inline,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties3.default)(_ref, ['label', 'children', 'value', 'className', 'inline', 'onChange']);

  return _react2.default.createElement(
    Wrap,
    { className: className },
    _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, props, { onClick: function onClick(e) {
        return onChange(e);
      } })),
    _react2.default.createElement(Span, null),
    label || children
  );
};

exports.default = Switch;