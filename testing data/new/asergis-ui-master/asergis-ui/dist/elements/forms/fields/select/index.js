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

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(props) {
  var _props$methods = props.methods;
  _props$methods = _props$methods === undefined ? {} : _props$methods;
  var setValidationRules = _props$methods.setValidationRules,
      onChange = _props$methods.onChange,
      attr = (0, _objectWithoutProperties3.default)(props, ['methods']);

  var id = 'id-' + attr['name'];

  setValidationRules && setValidationRules(attr);

  return _react2.default.createElement(_Select2.default, (0, _extends3.default)({ id: id, onChange: onChange }, attr));
};

Select.propTypes = {
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node,
  type: _propTypes2.default.string,
  options: _propTypes2.default.array
};

Select.defaultProps = {
  type: 'button',
  options: []
};

exports.default = Select;