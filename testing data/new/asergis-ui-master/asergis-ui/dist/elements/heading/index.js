'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Square = exports.Breadcrumb = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  text-transform: ', ';\n  margin: ', ';\n  text-align: ', ';\n  letter-spacing: normal;\n  line-height: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  text-transform: ', ';\n  margin: ', ';\n  text-align: ', ';\n  letter-spacing: normal;\n  line-height: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 10px 16px;\n  list-style: none;\n  li {\n    color: #1587da;\n    display: inline-block;\n    font-size: 12px;\n    font-weight: 600;\n    a {\n      color: #888 !important;\n    }\n  }\n  li:after {\n    border: 1px solid #888;\n    border-width: 0 1px 1px 0;\n    display: inline-block;\n    padding: 2px;\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n    content: \'\';\n    margin: 0px 10px;\n  }\n  li:last-child:after {\n    content: \'\';\n    border: 0px;\n  }\n'], ['\n  padding: 10px 16px;\n  list-style: none;\n  li {\n    color: #1587da;\n    display: inline-block;\n    font-size: 12px;\n    font-weight: 600;\n    a {\n      color: #888 !important;\n    }\n  }\n  li:after {\n    border: 1px solid #888;\n    border-width: 0 1px 1px 0;\n    display: inline-block;\n    padding: 2px;\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n    content: \'\';\n    margin: 0px 10px;\n  }\n  li:last-child:after {\n    content: \'\';\n    border: 0px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  height: 150px;\n  width: 250px;\n  border: 1px solid #0085bf;\n  border-radius: 5px;\n'], ['\n  height: 150px;\n  width: 250px;\n  border: 1px solid #0085bf;\n  border-radius: 5px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _styledComponents2.default.h2(_templateObject, function (props) {
  return props.primary ? '#0085bf' : '#666';
}, function (props) {
  return props.fz ? props.fz : '30px';
}, function (props) {
  return props.thin ? props.thin : '400';
}, function (props) {
  return props.capitalize && 'capitalize';
}, function (props) {
  return props.m ? props.m : '10px 0';
}, function (props) {
  return props.align ? props.align : 'unset';
}, function (props) {
  return props.h ? '44px' : '20px';
});
var Breadcrumb = exports.Breadcrumb = _styledComponents2.default.ul(_templateObject2);

var Square = exports.Square = _styledComponents2.default.div(_templateObject3);