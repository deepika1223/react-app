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

var _reactstrap = require('reactstrap');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchView = function SearchView(props) {
  var _props$type = props.type,
      type = _props$type === undefined ? 'text' : _props$type,
      id = props.id,
      label = props.label,
      error = props.error,
      data = props.data,
      placeholder = props.placeholder,
      attr = (0, _objectWithoutProperties3.default)(props, ['type', 'id', 'label', 'error', 'data', 'placeholder']);


  var formItemLayout = {};
  return _react2.default.createElement(
    _antd.Form.Item,
    (0, _extends3.default)({}, formItemLayout, { label: label }),
    _react2.default.createElement(_antd.Input, (0, _extends3.default)({
      type: type,
      id: id,
      placeholder: placeholder,
      invalid: !!error
    }, attr)),
    error && error.errorMessage
  );
};

exports.default = SearchView;