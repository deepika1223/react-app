"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  &.Select  {\n    /* position: relative; */\n    .Select-control {\n      display: flex;\n      border: 2px solid #d9d9d9; //#0085bf\n      border-radius: 5px;\n      padding: 12px 10px 10px;\n      color: #555;\n      /* font-size: 14px; */\n\n      .Select-multi-value-wrapper {\n        flex-grow: 1;\n      }\n    }\n    .Select-arrow-zone {\n      cursor: pointer;\n      position: relative;\n      text-align: center;\n      vertical-align: middle;\n      width: 30px; \n      padding-top: 7px;\n      .Select--rtl & {\n        padding-right: 0;\n        padding-left: 14px;  //\n      }\n      .Select-arrow {\n        border-color: #d9d9d9 transparent transparent;\n        border-style: solid;\n        border-width: 7px 7px 7px; //\n        display: inline-block;\n      }\n    }\n\n    .Select-clear-zone {\n      cursor: pointer;\n      position: relative;\n      text-align: center;\n      vertical-align: middle;\n      width: 20px; \n      &:hover {\n        color: black;\n      }\n    }\n    .Select-clear {\n      display: inline-block;\n      color: #d9d9d9;\n      content: \"x\";\n      font-size: 18px;\n      line-height: 1;\n    }\n    .Select-input {\n      opacity: 0;\n      height: 0;\n      position: absolute;\n      left: -1000;\n      top: -1000;\n    }\n    .Select-value {\n      display: inline-flex;\n      align-items: center;\n    }\t\n    .Select-menu-outer {\n      position: absolute;\n      z-index: 10;\n      min-width: 100%;\n      box-sizing: border-box;\n      border-radius: 3px;\n      background-color: white;\n      border 1px solid #d9d9d9;\n      border-top: none;\n      top: 100%;\n      -webkit-overflow-scrolling: touch;\n    }\n    .Select-option {\n      line-height: 1.42857143;\n      box-sizing: border-box;\n      background-color: white;\n      cursor: pointer;\n      display: block;\n      padding: 5px;\n      color: #555;\n\n      &.is-selected {\n       background-color: #0085bf;\n       color: white;\n      }\n\n      &.is-focused {\n        background-color: #d9d9d9\n      }\n\n      &.is-disabled {\n        cursor: default;\n      }\n    }\t\n  }\n  & .Select-placeholder {\n   \n  }\n\n  &.Select.is-open {\n    .Select-control {\n      border-color: #0085bf;\n    }\n    \n  }\n"], ["\n  &.Select  {\n    /* position: relative; */\n    .Select-control {\n      display: flex;\n      border: 2px solid #d9d9d9; //#0085bf\n      border-radius: 5px;\n      padding: 12px 10px 10px;\n      color: #555;\n      /* font-size: 14px; */\n\n      .Select-multi-value-wrapper {\n        flex-grow: 1;\n      }\n    }\n    .Select-arrow-zone {\n      cursor: pointer;\n      position: relative;\n      text-align: center;\n      vertical-align: middle;\n      width: 30px; \n      padding-top: 7px;\n      .Select--rtl & {\n        padding-right: 0;\n        padding-left: 14px;  //\n      }\n      .Select-arrow {\n        border-color: #d9d9d9 transparent transparent;\n        border-style: solid;\n        border-width: 7px 7px 7px; //\n        display: inline-block;\n      }\n    }\n\n    .Select-clear-zone {\n      cursor: pointer;\n      position: relative;\n      text-align: center;\n      vertical-align: middle;\n      width: 20px; \n      &:hover {\n        color: black;\n      }\n    }\n    .Select-clear {\n      display: inline-block;\n      color: #d9d9d9;\n      content: \"x\";\n      font-size: 18px;\n      line-height: 1;\n    }\n    .Select-input {\n      opacity: 0;\n      height: 0;\n      position: absolute;\n      left: -1000;\n      top: -1000;\n    }\n    .Select-value {\n      display: inline-flex;\n      align-items: center;\n    }\t\n    .Select-menu-outer {\n      position: absolute;\n      z-index: 10;\n      min-width: 100%;\n      box-sizing: border-box;\n      border-radius: 3px;\n      background-color: white;\n      border 1px solid #d9d9d9;\n      border-top: none;\n      top: 100%;\n      -webkit-overflow-scrolling: touch;\n    }\n    .Select-option {\n      line-height: 1.42857143;\n      box-sizing: border-box;\n      background-color: white;\n      cursor: pointer;\n      display: block;\n      padding: 5px;\n      color: #555;\n\n      &.is-selected {\n       background-color: #0085bf;\n       color: white;\n      }\n\n      &.is-focused {\n        background-color: #d9d9d9\n      }\n\n      &.is-disabled {\n        cursor: default;\n      }\n    }\t\n  }\n  & .Select-placeholder {\n   \n  }\n\n  &.Select.is-open {\n    .Select-control {\n      border-color: #0085bf;\n    }\n    \n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _decorators = require("../../decorators");

var _icons = require("../../../icons");

var _icons2 = _interopRequireDefault(_icons);

var _box = require("../../../box");

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Select classes https://github.com/JedWatson/react-select/tree/master/scss
var Select = (0, _styledComponents2.default)(_reactSelect2.default)(_templateObject);

var SelectView = function SelectView(props) {
  var id = props.id,
      label = props.label,
      name = props.name,
      required = props.required,
      value = props.value,
      _onChange = props.onChange,
      error = props.error,
      _props$options = props.options,
      options = _props$options === undefined ? [] : _props$options,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === undefined ? "Select" : _props$defaultValue,
      isClearable = props.isClearable,
      isSearchable = props.isSearchable,
      attr = (0, _objectWithoutProperties3.default)(props, ["id", "label", "name", "required", "value", "onChange", "error", "options", "defaultValue", "isClearable", "isSearchable"]);

  return _react2.default.createElement(
    _decorators.FormGroup,
    (0, _extends3.default)({}, props, { validation: error }),
    label && _react2.default.createElement(
      _decorators.Label,
      null,
      label,
      required && _react2.default.createElement(_decorators.Star, null)
    ),
    _react2.default.createElement(Select, {
      isClearable: isClearable,
      isSearchable: isSearchable,
      options: options,
      value: value,
      onChange: function onChange(params) {
        var _ref = params || {},
            value = _ref.value;

        _onChange({ target: { attributes: attr, name: name, value: value } });
      }
    }),
    error && _react2.default.createElement(
      _decorators.HelpLabel,
      null,
      error.errorMessage
    )
  );
};

exports.default = SelectView;