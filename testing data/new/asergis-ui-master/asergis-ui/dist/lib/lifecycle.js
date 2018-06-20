'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withLifecycle = function withLifecycle(methods) {
  return function (WrappedComponent) {
    var _loop = function _loop(methodName) {
      WrappedComponent.prototype[methodName] = function () {
        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        methods[methodName].apply(methods, [this.props].concat(params));
      };
    };

    for (var methodName in methods) {
      _loop(methodName);
    }
    return WrappedComponent;
  };
};

exports.default = withLifecycle;