'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = exports.Container = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 0 15px;\n  max-width: 1200px;\n  margin: 0 auto;\n  ', ';\n'], ['\n  padding: 0 15px;\n  max-width: 1200px;\n  margin: 0 auto;\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      max-width: 100%;\n    '], ['\n      max-width: 100%;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  margin-left: -15px;\n  margin-right: -15px;\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  margin-left: -15px;\n  margin-right: -15px;\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  padding-left: 15px;\n  padding-right: 15px;\n  flex: 0 0 100%;\n  max-width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  padding-left: 15px;\n  padding-right: 15px;\n  flex: 0 0 100%;\n  max-width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactNative = require('react-native');

var _media = require('../media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function percentage(val) {
  return 100 * val / 12 + '%';
}

var Container = exports.Container = _styledComponents2.default.View(_templateObject, function (_ref) {
  var fluid = _ref.fluid;
  return fluid && (0, _styledComponents.css)(_templateObject2);
});

var Row = exports.Row = _styledComponents2.default.View(_templateObject3);

var Col = exports.Col = _styledComponents2.default.View(_templateObject4, _media2.default.phone(_templateObject5, function (_ref2) {
  var xs = _ref2.xs;
  return xs && '\n      flex: 0 0 ' + percentage(xs) + ';\n      max-width: ' + percentage(xs) + ';\n    ';
}), _media2.default.tablet(_templateObject5, function (_ref3) {
  var sm = _ref3.sm;
  return sm && '\n      flex: 0 0 ' + percentage(sm) + ';\n      max-width: ' + percentage(sm) + ';\n    ';
}), _media2.default.desktop(_templateObject5, function (_ref4) {
  var md = _ref4.md;
  return md && '\n      flex: 0 0 ' + percentage(md) + ';\n      max-width: ' + percentage(md) + ';\n    ';
}), _media2.default.large(_templateObject5, function (_ref5) {
  var lg = _ref5.lg;
  return lg && '\n      flex: 0 0 ' + percentage(lg) + ';\n      max-width: ' + percentage(lg) + ';\n    ';
}));