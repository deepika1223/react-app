"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tfoot = exports.Thead = exports.TableResponsive = exports.Table = exports.Tbody = exports.Tr = exports.Th = exports.Td = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  padding: 20px;\n  text-align: ", ";\n  font-size: 14px;\n  color: #666;\n  font-weight: 400;\n  position: relative;\n  white-space: nowrap;\n"], ["\n  padding: 20px;\n  text-align: ", ";\n  font-size: 14px;\n  color: #666;\n  font-weight: 400;\n  position: relative;\n  white-space: nowrap;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  color: #262626;\n  font-weight: 700;\n  padding: 20px;\n  font-size: 14px;\n  white-space: nowrap;\n  text-align: ", ";\n"], ["\n  color: #262626;\n  font-weight: 700;\n  padding: 20px;\n  font-size: 14px;\n  white-space: nowrap;\n  text-align: ", ";\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n"], ["\n  position: relative;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  ", " {\n    border-top: solid 2px #f0f0f0;\n  }\n"], ["\n  ", " {\n    border-top: solid 2px #f0f0f0;\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  border-collapse: collapse;\n  ", ";\n  ", " {\n    ", ";\n  }\n  ", " {\n    ", ";\n  }\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  ", ";\n  ", " {\n    ", ";\n  }\n  ", " {\n    ", ";\n  }\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n          border: 1px solid #e0e3e6;\n        "], ["\n          border: 1px solid #e0e3e6;\n        "]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n          border-top: solid 2px #e0e3e6;\n          border-bottom: solid 2px #e0e3e6;\n        "], ["\n          border-top: solid 2px #e0e3e6;\n          border-bottom: solid 2px #e0e3e6;\n        "]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n        border-right: 1px solid #e0e3e6;\n        background-color: #f0f0f0;\n      "], ["\n        border-right: 1px solid #e0e3e6;\n        background-color: #f0f0f0;\n      "]),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(["\n        border-right: 1px solid #e0e3e6;\n      "], ["\n        border-right: 1px solid #e0e3e6;\n      "]),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(["\n  overflow-x: auto;\n  width: 100%;\n"], ["\n  overflow-x: auto;\n  width: 100%;\n"]),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)([""], [""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _filter = require("../filter");

var _filter2 = _interopRequireDefault(_filter);

var _checkbox = require("../../../forms/fields/checkbox");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _box = require("../../../box");

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Td = exports.Td = _styledComponents2.default.td(_templateObject, function (props) {
  return props.align ? props.align : 'left';
});

var Th = exports.Th = _styledComponents2.default.th(_templateObject2, function (props) {
  return props.align ? props.align : 'left';
});

var Tr = exports.Tr = _styledComponents2.default.tr(_templateObject3);
var Tbody = exports.Tbody = _styledComponents2.default.tbody(_templateObject4, Tr);
var Table = exports.Table = _styledComponents2.default.table(_templateObject5, function (props) {
  return props.border ? (0, _styledComponents.css)(_templateObject6) : (0, _styledComponents.css)(_templateObject7);
}, Th, function (props) {
  return props.border && (0, _styledComponents.css)(_templateObject8);
}, Td, function (props) {
  return props.border && (0, _styledComponents.css)(_templateObject9);
});

var TableResponsive = exports.TableResponsive = _styledComponents2.default.div(_templateObject10);
var Thead = exports.Thead = _styledComponents2.default.thead(_templateObject11);

var Tfoot = exports.Tfoot = _styledComponents2.default.tfoot(_templateObject11);

var TableView = function TableView(props) {
  var _props$columns = props.columns,
      columns = _props$columns === undefined ? [] : _props$columns,
      _props$data = props.data,
      data = _props$data === undefined ? [] : _props$data,
      makeFieldContent = props.makeFieldContent,
      changeFilter = props.changeFilter,
      onCheck = props.onCheck,
      loading = props.loading,
      header = props.header,
      isWithFilter = props.isWithFilter,
      checkbox = props.checkbox,
      _props$store = props.store,
      store = _props$store === undefined ? [] : _props$store,
      attr = (0, _objectWithoutProperties3.default)(props, ["columns", "data", "makeFieldContent", "changeFilter", "onCheck", "loading", "header", "isWithFilter", "checkbox", "store"]);

  return _react2.default.createElement(
    TableResponsive,
    null,
    _react2.default.createElement(
      Table,
      null,
      header !== false && _react2.default.createElement(
        Thead,
        null,
        _react2.default.createElement(
          Tr,
          null,
          checkbox && _react2.default.createElement(
            Th,
            { key: "checkbox" },
            _react2.default.createElement(_checkbox2.default, {
              name: "all",
              value: "all",
              methods: { onChange: onCheck } })
          ),
          columns.map(function (column, columnKey) {
            return _react2.default.createElement(
              Th,
              { key: columnKey },
              column.title
            );
          })
        )
      ),
      _react2.default.createElement(
        Tbody,
        null,
        isWithFilter && _react2.default.createElement(
          Tr,
          null,
          checkbox && _react2.default.createElement(Td, { key: "checkbox" }),
          columns.map(function (column, columnKey) {
            return _react2.default.createElement(
              Td,
              { key: columnKey },
              column.filter && _react2.default.createElement(_filter2.default, (0, _extends3.default)({}, column, { changeFilter: changeFilter }))
            );
          })
        ),
        data.map(function (item, itemKey) {
          return _react2.default.createElement(
            Tr,
            { key: itemKey },
            checkbox && _react2.default.createElement(
              Td,
              { key: "check-" + item.id },
              _react2.default.createElement(_checkbox2.default, {
                name: item.id,
                value: item.id,
                checked: !!store.some(function (el) {
                  return el === item.id;
                }),
                methods: { onChange: onCheck }
              })
            ),
            columns.map(function (column, columnKey) {
              return _react2.default.createElement(
                Td,
                { key: columnKey },
                makeFieldContent(column, item)
              );
            })
          );
        })
      )
    )
  );
};

exports.default = TableView;