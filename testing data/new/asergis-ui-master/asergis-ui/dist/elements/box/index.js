'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Img = exports.Heading = exports.Text = exports.Flex = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  && {\n    ', ';\n  }\n'], ['\n  && {\n    ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  is: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};

var BoxWrap = (0, _styledComponents2.default)((0, _tag2.default)())(_templateObject, function (props) {
  return (0, _css2.default)(props);
});

var Box = function Box(_ref) {
  var _ref$is = _ref.is,
      is = _ref$is === undefined ? 'div' : _ref$is,
      props = (0, _objectWithoutProperties3.default)(_ref, ['is']);
  return _react2.default.createElement(BoxWrap, (0, _extends3.default)({ is: is }, props));
};

var Flex = function Flex(_ref2) {
  var _ref2$is = _ref2.is,
      is = _ref2$is === undefined ? 'div' : _ref2$is,
      flex = _ref2.flex,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['is', 'flex']);
  return _react2.default.createElement(BoxWrap, (0, _extends3.default)({ is: is, flex: true }, props));
};

exports.Flex = Flex;
var Text = function Text(_ref3) {
  var _ref3$is = _ref3.is,
      is = _ref3$is === undefined ? 'p' : _ref3$is,
      _ref3$fz = _ref3.fz,
      fz = _ref3$fz === undefined ? '14' : _ref3$fz,
      _ref3$fw = _ref3.fw,
      fw = _ref3$fw === undefined ? '400' : _ref3$fw,
      _ref3$c = _ref3.c,
      c = _ref3$c === undefined ? '#666' : _ref3$c,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['is', 'fz', 'fw', 'c']);
  return _react2.default.createElement(BoxWrap, (0, _extends3.default)({ is: is, c: c, fz: fz, fw: fw }, props));
};

exports.Text = Text;
var Heading = function Heading(_ref4) {
  var _ref4$is = _ref4.is,
      is = _ref4$is === undefined ? 'h1' : _ref4$is,
      props = (0, _objectWithoutProperties3.default)(_ref4, ['is']);
  return _react2.default.createElement(BoxWrap, (0, _extends3.default)({ is: is }, props));
};

exports.Heading = Heading;
var Img = function Img(_ref5) {
  var _ref5$is = _ref5.is,
      is = _ref5$is === undefined ? 'img' : _ref5$is,
      props = (0, _objectWithoutProperties3.default)(_ref5, ['is']);
  return _react2.default.createElement(BoxWrap, (0, _extends3.default)({ is: is }, props));
};

exports.Img = Img;
Box.propTypes = propTypes;

exports.default = Box;