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

var _DateTime = require('./DateTime');

var _DateTime2 = _interopRequireDefault(_DateTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTime = function DateTime(props) {
  var value = props.value,
      _props$methods = props.methods;
  _props$methods = _props$methods === undefined ? {} : _props$methods;
  var setValidationRules = _props$methods.setValidationRules,
      onChange = _props$methods.onChange,
      attr = (0, _objectWithoutProperties3.default)(props, ['value', 'methods']);

  var id = 'id-' + attr['name'];

  setValidationRules && setValidationRules(attr);

  return _react2.default.createElement(_DateTime2.default, (0, _extends3.default)({ id: id, onChange: onChange }, attr));
};

DateTime.defaultProps = {
  type: 'date',
  required: false
};

DateTime.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  timeFormat: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

exports.default = DateTime;