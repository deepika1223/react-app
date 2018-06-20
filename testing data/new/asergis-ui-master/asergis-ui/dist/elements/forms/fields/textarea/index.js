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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(props) {
	var value = props.value,
	    _props$methods = props.methods,
	    setValidationRules = _props$methods.setValidationRules,
	    onChange = _props$methods.onChange,
	    attr = (0, _objectWithoutProperties3.default)(props, ['value', 'methods']);

	var id = 'id-' + attr['name'];

	setValidationRules && setValidationRules(attr);

	return _react2.default.createElement(_Textarea2.default, (0, _extends3.default)({ id: id, onChange: onChange }, attr));
};

Textarea.propTypes = {
	name: _propTypes2.default.string.isRequired
};

exports.default = Textarea;