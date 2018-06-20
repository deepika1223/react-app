'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPureLifecycle = require('react-pure-lifecycle');

var _reactPureLifecycle2 = _interopRequireDefault(_reactPureLifecycle);

var _reactEasyState = require('react-easy-state');

var _lib = require('../../lib');

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalMethods = {
  componentDidMount: function componentDidMount(_ref) {
    var name = _ref.name;

    _lib.store.modals[name] = {
      show: false
    };
  }
};

var Modal = function Modal(props) {
  var name = props.name,
      modal = props.modal,
      children = props.children,
      mutate = props.mutate,
      onToggle = props.onToggle;

  var _ref2 = _lib.store.modals[name] || {},
      show = _ref2.show;

  var methods = {
    toggle: function toggle(show) {
      _methods2.default.toggleModal(name, !show);
    }
  };

  return _react2.default.createElement(_Modal2.default, (0, _extends3.default)({ show: show }, props, methods));
};

Modal.propTypes = {
  name: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactPureLifecycle2.default)(ModalMethods)((0, _reactEasyState.view)(Modal));