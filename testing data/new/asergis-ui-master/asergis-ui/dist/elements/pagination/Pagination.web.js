"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.PageLi = exports.PaginationContainer = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  float: right;\n"], ["\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  float: right;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: list-item;\n  margin-left: 5px;\n"], ["\n  display: list-item;\n  margin-left: 5px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  background-color: #fff;\n  border: 2px solid #d9d9d9;\n  width: 40px;\n  height: 40px;\n  &:focus {\n    outline: 5px auto #e2e2e2;\n  }\n"], ["\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  background-color: #fff;\n  border: 2px solid #d9d9d9;\n  width: 40px;\n  height: 40px;\n  &:focus {\n    outline: 5px auto #e2e2e2;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationContainer = exports.PaginationContainer = _styledComponents2.default.ul(_templateObject);

var PageLi = exports.PageLi = _styledComponents2.default.li(_templateObject2);

var Link = exports.Link = _styledComponents2.default.button(_templateObject3);

var Pagination = function Pagination(props) {
  var store = props.store,
      currentPage = props.currentPage,
      inputValue = props.inputValue,
      onChange = props.onChange,
      onBlur = props.onBlur,
      setPage = props.setPage,
      prevPage = props.prevPage,
      nextPage = props.nextPage,
      _props$pages = props.pages,
      pages = _props$pages === undefined ? 1 : _props$pages;


  return _react2.default.createElement(
    PaginationContainer,
    null,
    _react2.default.createElement(
      PageLi,
      { onClick: prevPage },
      _react2.default.createElement(
        _.Box,
        { is: Link, css: "border-radius: 5px 0px 0px 5px;", c: "#d9d9d9" },
        _react2.default.createElement(_.Svg, { icon: "left-page" })
      )
    ),
    _react2.default.createElement(
      PageLi,
      null,
      _react2.default.createElement(_.Box, {
        is: _.FormControl,
        value: inputValue,
        onChange: onChange,
        onKeyUp: setPage,
        onBlur: onBlur,
        w: "57",
        h: "40",
        css: "border-radius: 0px 5px 5px 0px;"
      })
    ),
    _react2.default.createElement(
      PageLi,
      null,
      _react2.default.createElement(
        _.Box,
        { is: _.Text, css: "font-weight: 500", pt: "8" },
        "of"
      )
    ),
    _react2.default.createElement(
      PageLi,
      null,
      _react2.default.createElement(
        _.Box,
        { is: _.Text, css: "font-weight: 500", pt: "8", c: "#0085BF" },
        pages
      )
    ),
    _react2.default.createElement(
      PageLi,
      { onClick: nextPage },
      _react2.default.createElement(
        _.Box,
        { is: Link, css: "border-radius: 0px 5px 5px 0px;", c: "#0085BF" },
        _react2.default.createElement(_.Svg, { icon: "right-page" })
      )
    )
  );
};

exports.default = Pagination;