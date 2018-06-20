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

var _reactDom = require('react-dom');

var _nativeBase = require('native-base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimeView = function DateTimeView(props) {
  var _props$type = props.type,
      type = _props$type === undefined ? 'text' : _props$type,
      id = props.id,
      label = props.label,
      error = props.error,
      data = props.data,
      attr = (0, _objectWithoutProperties3.default)(props, ['type', 'id', 'label', 'error', 'data']);

  //TODO: show red invalid message

  return _react2.default.createElement(
    _nativeBase.Content,
    null,
    _react2.default.createElement(
      _nativeBase.Item,
      { floatingLabel: true, error: !!error },
      _react2.default.createElement(
        _nativeBase.Label,
        { 'for': id },
        label
      ),
      _react2.default.createElement(_nativeBase.Input, (0, _extends3.default)({
        type: type,
        id: id,
        invalid: !!error
      }, attr)),
      error && _react2.default.createElement(_nativeBase.Icon, { name: 'close-circle' })
    ),
    error && _react2.default.createElement(
      _nativeBase.Text,
      null,
      error.errorMessage
    )
  );
};

exports.default = DateTimeView;