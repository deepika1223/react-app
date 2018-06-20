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

var _reactCustomScrollbars = require('react-custom-scrollbars');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_reactCustomScrollbars.Scrollbars, (0, _extends3.default)({}, props, {
    renderThumbVertical: function renderThumbVertical(_ref) {
      var style = _ref.style,
          props = (0, _objectWithoutProperties3.default)(_ref, ['style']);
      return _react2.default.createElement('div', (0, _extends3.default)({}, props, {
        style: (0, _extends3.default)({}, style, {
          backgroundColor: '#0085bf'
        })
      }));
    },
    renderTrackVertical: function renderTrackVertical(_ref2) {
      var style = _ref2.style,
          props = (0, _objectWithoutProperties3.default)(_ref2, ['style']);
      return _react2.default.createElement('div', (0, _extends3.default)({}, props, {
        style: (0, _extends3.default)({}, style, {
          right: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          cursor: 'pointer',
          backgroundColor: '#d9d9d9',
          position: 'absolute'
        })
      }));
    }
  }));
};