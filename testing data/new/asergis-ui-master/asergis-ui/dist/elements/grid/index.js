'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubNavWrap = exports.Item = exports.NavWrap = exports.Nav = exports.Anchor = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border: none;\n  text-decoration: none;\n  border-bottom: none;\n  color: #fff;\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  font-family: $proxima-nova;\n  font-size: 16px;\n  padding: 12px 30px;\n  display: block;\n  white-space: nowrap;\n  @media (max-width: 950px) {\n    font-size: 13px;\n  }\n  &:hover {\n    text-decoration: none;\n    color: #ffffff;\n    @media (max-width: 600px) {\n      display: block;\n    }\n  }\n  &.active {\n    background: #005d86;\n    color: #fff;\n  }\n'], ['\n  border: none;\n  text-decoration: none;\n  border-bottom: none;\n  color: #fff;\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  font-family: $proxima-nova;\n  font-size: 16px;\n  padding: 12px 30px;\n  display: block;\n  white-space: nowrap;\n  @media (max-width: 950px) {\n    font-size: 13px;\n  }\n  &:hover {\n    text-decoration: none;\n    color: #ffffff;\n    @media (max-width: 600px) {\n      display: block;\n    }\n  }\n  &.active {\n    background: #005d86;\n    color: #fff;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #0085bf;\n'], ['\n  background-color: #0085bf;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  list-style: none;\n  padding-left: 0px;\n  position: relative;\n  margin: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n'], ['\n  list-style: none;\n  padding-left: 0px;\n  position: relative;\n  margin: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-block;\n  transition: 0.2s ease-out;\n  font-family: $soch_sans_serif;\n  text-align: center;\n  @media (max-width: 950px) {\n    padding: 1.5rem 1rem;\n  }\n\n  @media (max-width: 700px) {\n    padding: 1.5rem 0.65rem;\n  }\n'], ['\n  position: relative;\n  display: inline-block;\n  transition: 0.2s ease-out;\n  font-family: $soch_sans_serif;\n  text-align: center;\n  @media (max-width: 950px) {\n    padding: 1.5rem 1rem;\n  }\n\n  @media (max-width: 700px) {\n    padding: 1.5rem 0.65rem;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #fff;\n  position: absolute;\n  overflow: hidden;\n  left: ', 'px;\n  top: ', 'px;\n  width: ', 'px;\n  border: solid 2px #d9d9d9;\n  border-radius: 5px;\n  z-index: 55;\n\n  ', ' {\n    color: #666;\n    font-weight: 400;\n    text-align: left;\n    display: block;\n    padding: 12px 10px;\n    white-space: normal;\n    line-height: 22px;\n    &.active {\n      background: #005d86;\n      color: #fff;\n    }\n\n    &:hover {\n      background-color: #005d86;\n      color: #ffffff;\n    }\n  }\n  ', ' {\n    display: block;\n  }\n  &.slide-enter {\n    max-height: 0;\n    overflow: hidden;\n    transition: all 1s;\n  }\n  &.slide-enter-active {\n    max-height: 400px;\n  }\n  &.slide-leave {\n    max-height: 400px;\n    overflow: hidden;\n    transition: all 0.3s;\n  }\n  &.slide-leave-active {\n    max-height: 0px;\n  }\n'], ['\n  background-color: #fff;\n  position: absolute;\n  overflow: hidden;\n  left: ', 'px;\n  top: ', 'px;\n  width: ', 'px;\n  border: solid 2px #d9d9d9;\n  border-radius: 5px;\n  z-index: 55;\n\n  ', ' {\n    color: #666;\n    font-weight: 400;\n    text-align: left;\n    display: block;\n    padding: 12px 10px;\n    white-space: normal;\n    line-height: 22px;\n    &.active {\n      background: #005d86;\n      color: #fff;\n    }\n\n    &:hover {\n      background-color: #005d86;\n      color: #ffffff;\n    }\n  }\n  ', ' {\n    display: block;\n  }\n  &.slide-enter {\n    max-height: 0;\n    overflow: hidden;\n    transition: all 1s;\n  }\n  &.slide-enter-active {\n    max-height: 400px;\n  }\n  &.slide-leave {\n    max-height: 400px;\n    overflow: hidden;\n    transition: all 0.3s;\n  }\n  &.slide-leave-active {\n    max-height: 0px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = exports.Anchor = (0, _styledComponents2.default)(_reactRouterDom.NavLink)(_templateObject);
var Nav = exports.Nav = _styledComponents2.default.nav(_templateObject2);

var NavWrap = exports.NavWrap = _styledComponents2.default.ul(_templateObject3);
var Item = exports.Item = _styledComponents2.default.li(_templateObject4);
var SubNavWrap = exports.SubNavWrap = NavWrap.extend(_templateObject5, function (props) {
  return props.left;
}, function (props) {
  return props.top;
}, function (props) {
  return props.width;
}, Anchor, Item);