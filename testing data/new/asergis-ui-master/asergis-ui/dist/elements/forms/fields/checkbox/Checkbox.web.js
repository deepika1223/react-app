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
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n  margin-bottom: 0;\n  cursor: pointer;\n  input {\n    display: none;\n    & + ', ' {\n      min-width: 18px;\n      min-height: 18px;\n      background: #ffffff;\n      border: 2px solid #d4d0d0;\n      border-radius: 4px;\n      margin-right: 10px;\n      vertical-align: middle;\n      &:after {\n        width: 0;\n        transition: 0.3s width;\n      }\n    }\n    &:checked {\n      & + ', ' {\n        background: #0085bf;\n        border: 2px solid #0085bf;\n        &:after {\n          left: 5px;\n          top: 1px;\n          position: absolute;\n          width: 5px;\n          height: 10px;\n          display: block;\n          border: solid white;\n          border-width: 0 2px 2px 0;\n          transform: rotate(45deg);\n        }\n      }\n    }\n  }\n'], ['\n  user-select: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n  margin-bottom: 0;\n  cursor: pointer;\n  input {\n    display: none;\n    & + ', ' {\n      min-width: 18px;\n      min-height: 18px;\n      background: #ffffff;\n      border: 2px solid #d4d0d0;\n      border-radius: 4px;\n      margin-right: 10px;\n      vertical-align: middle;\n      &:after {\n        width: 0;\n        transition: 0.3s width;\n      }\n    }\n    &:checked {\n      & + ', ' {\n        background: #0085bf;\n        border: 2px solid #0085bf;\n        &:after {\n          left: 5px;\n          top: 1px;\n          position: absolute;\n          width: 5px;\n          height: 10px;\n          display: block;\n          border: solid white;\n          border-width: 0 2px 2px 0;\n          transform: rotate(45deg);\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Span = _styledComponents2.default.span(_templateObject);

var Wrap = _styledComponents2.default.label(_templateObject2, Span, Span);

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      children = _ref.children,
      value = _ref.value,
      group = _ref.group,
      defaultValue = _ref.defaultValue,
      className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['label', 'children', 'value', 'group', 'defaultValue', 'className']);

  return _react2.default.createElement(
    Wrap,
    { className: className },
    _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, props, { value: value, defaultValue: defaultValue, group: group })),
    _react2.default.createElement(Span, null),
    label || children
  );
};

exports.default = Checkbox;