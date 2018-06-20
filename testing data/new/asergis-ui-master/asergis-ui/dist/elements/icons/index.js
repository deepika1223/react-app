'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _json = require('./json');

var _json2 = _interopRequireDefault(_json);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPath(iconName) {
  var icon = _json2.default.icons.find(function (icon) {
    return icon.tags[0] === iconName;
  });

  if (icon) {
    return icon.paths.join(' ');
  } else {
    console.warn('icon ' + iconName + ' does not exist.');
    return '';
  }
} // the file exported from IcoMoon


var Svg = function Svg(_ref) {
  var _console;

  var icon = _ref.icon,
      props = (0, _objectWithoutProperties3.default)(_ref, ['icon']);

  if (icon === 'sub_user') {
    return _react2.default.createElement(
      _icon2.default,
      (0, _extends3.default)({ viewBox: '0 0 30 30' }, props),
      _react2.default.createElement(
        'g',
        { transform: 'scale(0.03125 0.03125)' },
        _react2.default.createElement('path', {
          fill: 'rgb(0, 101, 143)',
          d: 'M813.056 509.952c0 151.552-122.88 276.48-274.432 276.48-153.6 0-278.528-122.88-278.528-276.48s122.88-276.48 276.48-276.48c155.648 0 276.48 122.88 276.48 276.48z'
        }),
        _react2.default.createElement('path', {
          fill: 'rgb(255, 255, 255)',
          d: 'M497.664 638.976c-2.048-22.528-14.336-36.864-30.72-49.152 4.096-6.144 8.192-12.288 10.24-16.384 32.768 14.336 49.152 47.104 43.008 90.112-55.296 0-110.592 0-165.888 0-12.288-32.768 6.144-73.728 38.912-90.112 6.144 4.096 8.192 10.24 10.24 16.384-16.384 10.24-28.672 26.624-30.72 49.152 40.96 0 81.92 0 124.928 0z'
        }),
        _react2.default.createElement('path', {
          fill: 'rgb(255, 255, 255)',
          d: 'M675.84 581.632c0-8.192 6.144-12.288 8.192-18.432 32.768 16.384 45.056 43.008 40.96 88.064-53.248 0-106.496 0-161.792 0-10.24-34.816 6.144-71.68 38.912-88.064 4.096 6.144 6.144 10.24 10.24 16.384-6.144 8.192-16.384 12.288-20.48 20.48s-8.192 16.384-6.144 26.624c38.912 0 77.824 0 116.736 0 2.048-20.48-10.24-32.768-26.624-45.056z'
        }),
        _react2.default.createElement('path', {
          fill: 'rgb(255, 255, 255)',
          d: 'M485.376 438.272c40.96 0 79.872 0 118.784 0-2.048-20.48-12.288-34.816-28.672-45.056 0-8.192 6.144-12.288 8.192-18.432 30.72 14.336 47.104 45.056 40.96 86.016-53.248 0-108.544 0-161.792 0-10.24-32.768 4.096-65.536 38.912-88.064 2.048 2.048 4.096 4.096 4.096 8.192 2.048 2.048 2.048 6.144 4.096 10.24-10.24 12.288-26.624 24.576-24.576 47.104z'
        }),
        _react2.default.createElement('path', {
          fill: 'rgb(255, 255, 255)',
          d: 'M698.368 516.096c0 28.672-24.576 55.296-55.296 55.296-28.672 0-55.296-26.624-55.296-55.296s24.576-55.296 55.296-55.296c30.72 2.048 55.296 26.624 55.296 55.296zM675.84 516.096c0-16.384-16.384-32.768-30.72-32.768-16.384 0-32.768 14.336-32.768 32.768 0 16.384 14.336 30.72 30.72 32.768 16.384 0 32.768-14.336 32.768-32.768z'
        }),
        _react2.default.createElement('path', {
          fill: 'rgb(255, 255, 255)',
          d: 'M497.664 518.144c0 30.72-24.576 55.296-55.296 55.296-28.672 0-53.248-24.576-53.248-55.296s24.576-55.296 55.296-55.296c30.72 0 53.248 24.576 53.248 55.296zM442.368 548.864c16.384 0 30.72-12.288 32.768-30.72 0-18.432-12.288-32.768-30.72-34.816-16.384 0-30.72 12.288-32.768 30.72 0 20.48 14.336 34.816 30.72 34.816z'
        }),
        _react2.default.createElement('path', {
          fill: 'rgb(255, 255, 255)',
          d: 'M598.016 327.68c0 30.72-22.528 55.296-53.248 55.296s-55.296-22.528-55.296-53.248c0-30.72 22.528-53.248 53.248-53.248 30.72-2.048 55.296 20.48 55.296 51.2zM544.768 296.96c-18.432 0-30.72 12.288-30.72 30.72s14.336 30.72 30.72 32.768c18.432 0 32.768-14.336 32.768-32.768-2.048-16.384-16.384-30.72-32.768-30.72z'
        })
      )
    );
  }
  (_console = console).log.apply(_console, (0, _toConsumableArray3.default)(props));
  return _react2.default.createElement(
    _icon2.default,
    (0, _extends3.default)({ viewBox: '0 0 1024 1024' }, props),
    _react2.default.createElement('path', { d: getPath(icon) })
  );
};

Svg.propTypes = {
  icon: _propTypes2.default.string.isRequired
};

exports.default = Svg;