'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CsLink = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: #0086bb;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 12px;\n  padding: 17px 18px;\n  &:hover {\n    background: #0378ab;\n  }\n'], ['\n  background: #0086bb;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 12px;\n  padding: 17px 18px;\n  &:hover {\n    background: #0378ab;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CsLink = exports.CsLink = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject);