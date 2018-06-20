'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _nativeBase = require('native-base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioView = function RadioView(props) {
  var id = props.id,
      label = props.label,
      error = props.error,
      data = props.data,
      attr = (0, _objectWithoutProperties3.default)(props, ['id', 'label', 'error', 'data']);

  //TODO: show red invalid message

  return _react2.default.createElement(_nativeBase.Content, null);
};

exports.default = RadioView;