'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  font-size: 12px;\n  color: #b3b3b3;\n  .cross {\n    opacity: 0;\n    &:hover {\n      opacity: 1;\n    }\n  }\n  ', ' {\n    &:focus {\n      & + svg {\n        color: #0085bf;\n      }\n    }\n    &:hover,\n    &:focus {\n      & ~ .cross {\n        opacity: 1;\n      }\n    }\n  }\n\n  .rdtPicker {\n    max-height: 0;\n    position: absolute;\n    width: 100%;\n    min-width: 260px;\n    max-width: 400px;\n    margin-top: 10px;\n    z-index: 99999 !important;\n    background: #fff;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    border: 2px solid #d9d9d9;\n    border-radius: 5px;\n    overflow: hidden;\n    opacity: 0;\n    transition: all 0.3s;\n  }\n  &.rdtOpen .rdtPicker {\n    max-height: 400px;\n    opacity: 1;\n  }\n  .rdtStatic .rdtPicker {\n    box-shadow: none;\n    position: static;\n  }\n\n  .rdtPicker .rdtTimeToggle {\n    text-align: center;\n  }\n\n  .rdtPicker table {\n    width: 100%;\n    margin: 0;\n  }\n  .rdtPicker td,\n  .rdtPicker th {\n    text-align: center;\n    height: 40px;\n  }\n  .rdtPicker td {\n    cursor: pointer;\n  }\n  .rdtPicker td.rdtDay:hover,\n  .rdtPicker td.rdtHour:hover,\n  .rdtPicker td.rdtMinute:hover,\n  .rdtPicker td.rdtSecond:hover,\n  .rdtPicker .rdtTimeToggle:hover {\n    background: #eeeeee;\n    cursor: pointer;\n  }\n  .rdtPicker td.rdtOld,\n  .rdtPicker td.rdtNew {\n    opacity: 0.3;\n  }\n  .rdtPicker td.rdtToday {\n    position: relative;\n    background: #428bca;\n    color: #fff;\n    &:hover {\n      color: #333;\n    }\n  }\n  .rdtPicker td.rdtToday:before {\n    content: \'\';\n    display: inline-block;\n    border-left: 7px solid transparent;\n    border-bottom: 7px solid #fff;\n    border-top-color: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    bottom: 4px;\n    right: 4px;\n  }\n  .rdtPicker td.rdtActive,\n  .rdtPicker td.rdtActive:hover {\n    background-color: #428bca;\n    color: #fff;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  }\n  .rdtPicker td.rdtActive.rdtToday:before {\n    border-bottom-color: #fff;\n  }\n  .rdtPicker td.rdtDisabled,\n  .rdtPicker td.rdtDisabled:hover {\n    background: none;\n    color: #999999;\n    cursor: not-allowed;\n  }\n\n  .rdtPicker td span.rdtOld {\n    color: #999999;\n  }\n  .rdtPicker td span.rdtDisabled,\n  .rdtPicker td span.rdtDisabled:hover {\n    background: none;\n    color: #999999;\n    cursor: not-allowed;\n  }\n  .rdtPicker th {\n    border-bottom: 1px solid #f9f9f9;\n  }\n  .rdtPicker .dow {\n    width: 14.2857%;\n    border-bottom: none;\n    cursor: default;\n    height: 45px;\n  }\n  .rdtPicker th.rdtSwitch {\n    width: 100px;\n  }\n  .rdtPicker th.rdtNext,\n  .rdtPicker th.rdtPrev {\n    font-size: 21px;\n    vertical-align: top;\n  }\n\n  .rdtPrev span,\n  .rdtNext span {\n    display: block;\n    user-select: none;\n  }\n\n  .rdtPicker th.rdtDisabled,\n  .rdtPicker th.rdtDisabled:hover {\n    background: none;\n    color: #999999;\n    cursor: not-allowed;\n  }\n  .rdtPicker thead tr:first-child th {\n    cursor: pointer;\n    height: 60px;\n    vertical-align: middle;\n  }\n  .rdtPicker thead tr:first-child th:hover {\n    background: #eeeeee;\n  }\n\n  .rdtPicker tfoot {\n    border-top: 1px solid #f9f9f9;\n  }\n\n  .rdtPicker button {\n    border: none;\n    background: none;\n    cursor: pointer;\n  }\n  .rdtPicker button:hover {\n    background-color: #eee;\n  }\n\n  .rdtPicker thead button {\n    width: 100%;\n    height: 100%;\n  }\n\n  td.rdtMonth,\n  td.rdtYear {\n    height: 50px;\n    width: 25%;\n    cursor: pointer;\n  }\n  td.rdtMonth:hover,\n  td.rdtYear:hover {\n    background: #eee;\n  }\n\n  .rdtCounters {\n    display: flex;\n  }\n\n  .rdtCounter {\n    height: 100px;\n  }\n\n  .rdtCounter {\n    width: 100%;\n  }\n\n  .rdtCounterSeparator {\n    line-height: 100px;\n  }\n\n  .rdtCounter .rdtBtn {\n    height: 40%;\n    line-height: 40px;\n    cursor: pointer;\n    display: block;\n    user-select: none;\n  }\n  .rdtCounter .rdtBtn:hover {\n    background: #eee;\n  }\n  .rdtCounter .rdtCount {\n    height: 20%;\n    font-size: 1.2em;\n  }\n\n  .rdtMilli {\n    vertical-align: middle;\n    padding-left: 8px;\n    width: 48px;\n  }\n\n  .rdtMilli input {\n    width: 100%;\n    font-size: 1.2em;\n    margin-top: 37px;\n  }\n\n  .rdtTime td {\n    cursor: default;\n  }\n'], ['\n  position: relative;\n  font-size: 12px;\n  color: #b3b3b3;\n  .cross {\n    opacity: 0;\n    &:hover {\n      opacity: 1;\n    }\n  }\n  ', ' {\n    &:focus {\n      & + svg {\n        color: #0085bf;\n      }\n    }\n    &:hover,\n    &:focus {\n      & ~ .cross {\n        opacity: 1;\n      }\n    }\n  }\n\n  .rdtPicker {\n    max-height: 0;\n    position: absolute;\n    width: 100%;\n    min-width: 260px;\n    max-width: 400px;\n    margin-top: 10px;\n    z-index: 99999 !important;\n    background: #fff;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    border: 2px solid #d9d9d9;\n    border-radius: 5px;\n    overflow: hidden;\n    opacity: 0;\n    transition: all 0.3s;\n  }\n  &.rdtOpen .rdtPicker {\n    max-height: 400px;\n    opacity: 1;\n  }\n  .rdtStatic .rdtPicker {\n    box-shadow: none;\n    position: static;\n  }\n\n  .rdtPicker .rdtTimeToggle {\n    text-align: center;\n  }\n\n  .rdtPicker table {\n    width: 100%;\n    margin: 0;\n  }\n  .rdtPicker td,\n  .rdtPicker th {\n    text-align: center;\n    height: 40px;\n  }\n  .rdtPicker td {\n    cursor: pointer;\n  }\n  .rdtPicker td.rdtDay:hover,\n  .rdtPicker td.rdtHour:hover,\n  .rdtPicker td.rdtMinute:hover,\n  .rdtPicker td.rdtSecond:hover,\n  .rdtPicker .rdtTimeToggle:hover {\n    background: #eeeeee;\n    cursor: pointer;\n  }\n  .rdtPicker td.rdtOld,\n  .rdtPicker td.rdtNew {\n    opacity: 0.3;\n  }\n  .rdtPicker td.rdtToday {\n    position: relative;\n    background: #428bca;\n    color: #fff;\n    &:hover {\n      color: #333;\n    }\n  }\n  .rdtPicker td.rdtToday:before {\n    content: \'\';\n    display: inline-block;\n    border-left: 7px solid transparent;\n    border-bottom: 7px solid #fff;\n    border-top-color: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    bottom: 4px;\n    right: 4px;\n  }\n  .rdtPicker td.rdtActive,\n  .rdtPicker td.rdtActive:hover {\n    background-color: #428bca;\n    color: #fff;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  }\n  .rdtPicker td.rdtActive.rdtToday:before {\n    border-bottom-color: #fff;\n  }\n  .rdtPicker td.rdtDisabled,\n  .rdtPicker td.rdtDisabled:hover {\n    background: none;\n    color: #999999;\n    cursor: not-allowed;\n  }\n\n  .rdtPicker td span.rdtOld {\n    color: #999999;\n  }\n  .rdtPicker td span.rdtDisabled,\n  .rdtPicker td span.rdtDisabled:hover {\n    background: none;\n    color: #999999;\n    cursor: not-allowed;\n  }\n  .rdtPicker th {\n    border-bottom: 1px solid #f9f9f9;\n  }\n  .rdtPicker .dow {\n    width: 14.2857%;\n    border-bottom: none;\n    cursor: default;\n    height: 45px;\n  }\n  .rdtPicker th.rdtSwitch {\n    width: 100px;\n  }\n  .rdtPicker th.rdtNext,\n  .rdtPicker th.rdtPrev {\n    font-size: 21px;\n    vertical-align: top;\n  }\n\n  .rdtPrev span,\n  .rdtNext span {\n    display: block;\n    user-select: none;\n  }\n\n  .rdtPicker th.rdtDisabled,\n  .rdtPicker th.rdtDisabled:hover {\n    background: none;\n    color: #999999;\n    cursor: not-allowed;\n  }\n  .rdtPicker thead tr:first-child th {\n    cursor: pointer;\n    height: 60px;\n    vertical-align: middle;\n  }\n  .rdtPicker thead tr:first-child th:hover {\n    background: #eeeeee;\n  }\n\n  .rdtPicker tfoot {\n    border-top: 1px solid #f9f9f9;\n  }\n\n  .rdtPicker button {\n    border: none;\n    background: none;\n    cursor: pointer;\n  }\n  .rdtPicker button:hover {\n    background-color: #eee;\n  }\n\n  .rdtPicker thead button {\n    width: 100%;\n    height: 100%;\n  }\n\n  td.rdtMonth,\n  td.rdtYear {\n    height: 50px;\n    width: 25%;\n    cursor: pointer;\n  }\n  td.rdtMonth:hover,\n  td.rdtYear:hover {\n    background: #eee;\n  }\n\n  .rdtCounters {\n    display: flex;\n  }\n\n  .rdtCounter {\n    height: 100px;\n  }\n\n  .rdtCounter {\n    width: 100%;\n  }\n\n  .rdtCounterSeparator {\n    line-height: 100px;\n  }\n\n  .rdtCounter .rdtBtn {\n    height: 40%;\n    line-height: 40px;\n    cursor: pointer;\n    display: block;\n    user-select: none;\n  }\n  .rdtCounter .rdtBtn:hover {\n    background: #eee;\n  }\n  .rdtCounter .rdtCount {\n    height: 20%;\n    font-size: 1.2em;\n  }\n\n  .rdtMilli {\n    vertical-align: middle;\n    padding-left: 8px;\n    width: 48px;\n  }\n\n  .rdtMilli input {\n    width: 100%;\n    font-size: 1.2em;\n    margin-top: 37px;\n  }\n\n  .rdtTime td {\n    cursor: default;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  background: #fff;\n  color: #354052;\n  border-radius: 50%;\n  right: 12px;\n  top: 12px;\n  width: 25px;\n  height: 25px;\n  line-height: 20px;\n  text-align: center;\n  font-size: 12px;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);\n'], ['\n  position: absolute;\n  background: #fff;\n  color: #354052;\n  border-radius: 50%;\n  right: 12px;\n  top: 12px;\n  width: 25px;\n  height: 25px;\n  line-height: 20px;\n  text-align: center;\n  font-size: 12px;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _icons = require('../../../icons');

var _icons2 = _interopRequireDefault(_icons);

var _decorators = require('../../decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTime = (0, _styledComponents2.default)(_reactDatetime2.default)(_templateObject, _decorators.FormControl);
var Icon = _styledComponents2.default.button(_templateObject2);

var _renderInput = function _renderInput(props, icon, placeholder, onChange) {
  var clear = function clear() {
    props.onChange({ target: { attributes: props, name: props.name, value: '' } });
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_decorators.FormControl, (0, _extends3.default)({}, props, { placeholder: placeholder })),
    icon && _react2.default.createElement(_icons2.default, { icon: icon }),
    props.value && _react2.default.createElement(
      Icon,
      { className: 'cross', onClick: clear },
      'X'
    )
  );
};

var DateTimeView = function DateTimeView(props) {
  var type = props.type,
      icon = props.icon,
      name = props.name,
      label = props.label,
      error = props.error,
      required = props.required,
      _onChange = props.onChange,
      timeFormat = props.timeFormat,
      dateFormat = props.dateFormat,
      placeholder = props.placeholder,
      attr = (0, _objectWithoutProperties3.default)(props, ['type', 'icon', 'name', 'label', 'error', 'required', 'onChange', 'timeFormat', 'dateFormat', 'placeholder']);


  return _react2.default.createElement(
    _decorators.FormGroup,
    (0, _extends3.default)({}, props, { validation: error, required: null }),
    label && _react2.default.createElement(
      _decorators.Label,
      null,
      label,
      required && _react2.default.createElement(_decorators.Star, null)
    ),
    _react2.default.createElement(DateTime, (0, _extends3.default)({}, attr, {
      name: name,
      renderInput: function renderInput(props) {
        return _renderInput(props, icon, placeholder);
      },
      onChange: function onChange(value) {
        return _onChange({ target: { attributes: attr, name: name, value: value.toString() } });
      },
      closeOnSelect: true,
      dateFormat: type === 'date' && dateFormat,
      timeFormat: type === 'time' && timeFormat
    }))
  );
};

exports.default = DateTimeView;