'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonView = function ButtonView(props) {
  var title = props.title,
      children = props.children,
      attr = (0, _objectWithoutProperties3.default)(props, ['title', 'children']);

  return _react2.default.createElement(Button, (0, _extends3.default)({ title: title }, attr));
};

exports.default = ButtonView;