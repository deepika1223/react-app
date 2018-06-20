"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(props) {
  var title = props.title,
      children = props.children,
      attr = (0, _objectWithoutProperties3.default)(props, ["title", "children"]);

  return _react2.default.createElement(
    _reactNative.View,
    null,
    _react2.default.createElement(
      _reactNative.Text,
      null,
      "Pagination"
    )
  );
};

exports.default = Pagination;