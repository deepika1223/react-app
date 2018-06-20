'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _css = require('./css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var omit = Object.keys(_css.fullForm).reduce(function (prev, next) {
  prev.push(next);
  return prev;
}, []);

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$prop = _ref.prop,
      prop = _ref$prop === undefined ? 'is' : _ref$prop;

  return function (_Component) {
    (0, _inherits3.default)(Tag, _Component);

    function Tag() {
      (0, _classCallCheck3.default)(this, Tag);
      return (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
    }

    (0, _createClass3.default)(Tag, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            otherProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

        var tag = otherProps[prop];
        var omitPropsKeys = [prop, 'css'].concat((0, _toConsumableArray3.default)(omit));
        var props = Object.keys(otherProps).reduce(function (prev, next) {
          if (omitPropsKeys.includes(next)) {
            return prev;
          } else {
            prev[next] = otherProps[next];
            return prev;
          }
        }, {});
        return _react2.default.createElement(tag, props, children);
      }
    }]);
    return Tag;
  }(_react.Component);
};