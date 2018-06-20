'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Star = exports.HelpLabel = exports.Label = exports.FormGroup = exports.FormControl = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  width: 100%;\n  padding: 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 2px solid #d9d9d9;\n  border-radius: 5px;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  &:focus {\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    border: 2px solid #0085bf;\n    outline: 0;\n  }\n  ', ';\n  ::placeholder {\n    color: #b3b3b3;\n    font-weight: 600;\n    font-size: 12px;\n    opacity: 1;\n  }\n'], ['\n  display: block;\n  width: 100%;\n  padding: 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 2px solid #d9d9d9;\n  border-radius: 5px;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  &:focus {\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    border: 2px solid #0085bf;\n    outline: 0;\n  }\n  ', ';\n  ::placeholder {\n    color: #b3b3b3;\n    font-weight: 600;\n    font-size: 12px;\n    opacity: 1;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      border-color: #f13a30;\n    '], ['\n      border-color: #f13a30;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  font-size: 14px;\n  margin-bottom: ', ';\n    ', ' svg {\n    position: absolute;\n    right: 15px;\n    top: 16px;\n    color: #b3b3b3;\n    font-size: 16px;\n    pointer-events: none;\n  }\n'], ['\n  position: relative;\n  font-size: 14px;\n  margin-bottom: ', ';\n    ', ' svg {\n    position: absolute;\n    right: 15px;\n    top: 16px;\n    color: #b3b3b3;\n    font-size: 16px;\n    pointer-events: none;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      color: #f13a30;\n    '], ['\n      color: #f13a30;\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  margin-bottom: 20px;\n  font-size: ', ';\n  font-weight: ', ';\n  color: #666;\n  line-height: 1;\n  color: ', ';\n'], ['\n  display: inline-block;\n  margin-bottom: 20px;\n  font-size: ', ';\n  font-weight: ', ';\n  color: #666;\n  line-height: 1;\n  color: ', ';\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 14px;\n  color: #ff0000;\n  font-weight: normal;\n  margin-bottom: 0px;\n'], ['\n  font-size: 14px;\n  color: #ff0000;\n  font-weight: normal;\n  margin-bottom: 0px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  ::after {\n    content: \' *\';\n    color: red;\n    font-size: 15px;\n    font-weight: 900;\n  }\n'], ['\n  ::after {\n    content: \' *\';\n    color: red;\n    font-size: 15px;\n    font-weight: 900;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormControl = exports.FormControl = _styledComponents2.default.input(_templateObject, function (_ref) {
  var validation = _ref.validation;
  return validation && (0, _styledComponents.css)(_templateObject2);
});

var FormGroup = exports.FormGroup = _styledComponents2.default.div(_templateObject3, function (_ref2) {
  var mb = _ref2.mb;
  return mb ? '0' : '20px';
}, function (_ref3) {
  var validation = _ref3.validation;
  return validation && (0, _styledComponents.css)(_templateObject4);
});

var Label = exports.Label = _styledComponents2.default.label(_templateObject5, function (props) {
  return props.fz ? props.fz : '14px';
}, function (props) {
  return props.w ? props.w : '600';
}, function (props) {
  return props.primary ? '#0085bf' : '#666';
});

var HelpLabel = exports.HelpLabel = _styledComponents2.default.p(_templateObject6);

var Star = exports.Star = _styledComponents2.default.span(_templateObject7);