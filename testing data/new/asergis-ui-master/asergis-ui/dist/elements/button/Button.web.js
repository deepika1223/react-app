'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  font-weight: 700;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: ', ';\n  padding: 10px;\n  letter-spacing: 1px;\n  min-width: 130px;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  border-radius: 4px;\n  outline: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: #999;\n  background-color: #fff;\n\n  & + button {\n    margin-left: 15px;\n  }\n\n  &:hover {\n    border-color: #adadad;\n    background-color: #fff;\n  }\n  &:focus {\n    outline: 0;\n  }\n  ', '\n    ', '\n\n     ', ';\n  ', ';\n  ', ';\n\n ', '  ;\n'], ['\n  display: inline-block;\n  font-weight: 700;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: ', ';\n  padding: 10px;\n  letter-spacing: 1px;\n  min-width: 130px;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  border-radius: 4px;\n  outline: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: #999;\n  background-color: #fff;\n\n  & + button {\n    margin-left: 15px;\n  }\n\n  &:hover {\n    border-color: #adadad;\n    background-color: #fff;\n  }\n  &:focus {\n    outline: 0;\n  }\n  ', '\n    ', '\n\n     ', ';\n  ', ';\n  ', ';\n\n ', '  ;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      color: #fff;\n      background-color: #0085bf;\n      &:hover {\n        background-color: #0378ab;\n        color: #ffffff;\n      }\n    '], ['\n      color: #fff;\n      background-color: #0085bf;\n      &:hover {\n        background-color: #0378ab;\n        color: #ffffff;\n      }\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n        padding: 17px 18px;\n        width: 196px;\n        border: none;\n        color: #fff;\n        background-color: #0085bf;\n        &:hover {\n          background-color: #0378ab;\n          color: #ffffff;\n        }\n      '], ['\n        padding: 17px 18px;\n        width: 196px;\n        border: none;\n        color: #fff;\n        background-color: #0085bf;\n        &:hover {\n          background-color: #0378ab;\n          color: #ffffff;\n        }\n      ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n         background-color: #5cb85c;\n         color: #ffffff;\n         &:hover {\n           background-color: #449d44;\n         }\n       '], ['\n         background-color: #5cb85c;\n         color: #ffffff;\n         &:hover {\n           background-color: #449d44;\n         }\n       ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      background-color: #e95f5f;\n      color: #ffffff;\n      border: 2px solid #e95f5f;\n      &:hover {\n        background-color: #e65555;\n      }\n    '], ['\n      background-color: #e95f5f;\n      color: #ffffff;\n      border: 2px solid #e95f5f;\n      &:hover {\n        background-color: #e65555;\n      }\n    ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      background-color: #c3c3c3;\n      color: #ffffff;\n      &:hover {\n        background-color: #aeaeae;\n      }\n    '], ['\n      background-color: #c3c3c3;\n      color: #ffffff;\n      &:hover {\n        background-color: #aeaeae;\n      }\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n     padding-top: 13px;\n     padding-bottom: 13px;\n     text-transform: none;\n     min-width: 139px;\n   '], ['\n     padding-top: 13px;\n     padding-bottom: 13px;\n     text-transform: none;\n     min-width: 139px;\n   ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.bdr ? '2px solid #0085bf' : '2px solid #d9d9d9';
}, function (_ref) {
  var primary = _ref.primary;
  return primary && (0, _styledComponents.css)(_templateObject2);
}, function (_ref2) {
  var large = _ref2.large;
  return large && (0, _styledComponents.css)(_templateObject3);
}, function (_ref3) {
  var success = _ref3.success;
  return success && (0, _styledComponents.css)(_templateObject4);
}, function (_ref4) {
  var danger = _ref4.danger;
  return danger && (0, _styledComponents.css)(_templateObject5);
}, function (_ref5) {
  var gray = _ref5.gray;
  return gray && (0, _styledComponents.css)(_templateObject6);
}, function (_ref6) {
  var grayTransparent = _ref6.grayTransparent;
  return grayTransparent && (0, _styledComponents.css)(_templateObject7);
});