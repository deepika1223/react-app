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

var HiddenView = function HiddenView(props) {
	var type = props.type,
	    error = props.error,
	    data = props.data,
	    attr = (0, _objectWithoutProperties3.default)(props, ['type', 'error', 'data']);

	return _react2.default.createElement(_nativeBase.Input, (0, _extends3.default)({ type: 'hidden' }, attr));
};

exports.default = HiddenView;