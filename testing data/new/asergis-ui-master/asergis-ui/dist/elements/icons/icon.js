'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconBase = function IconBase(_ref, _ref2) {
  var _ref2$reactIconBase = _ref2.reactIconBase,
      reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      width = _ref.width,
      height = _ref.height,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var computedSize = size || reactIconBase.size || '1em';

  var baseStyle = reactIconBase.style || {};
  var styleProp = (0, _extends3.default)({
    verticalAlign: 'middle'
  }, baseStyle, style);

  var computedColor = color || style.color || reactIconBase.color || baseStyle.color;
  if (computedColor) {
    styleProp.color = computedColor;
  }

  return _react2.default.createElement('svg', (0, _extends3.default)({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: styleProp
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;