'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = require('react-dom');

var _nativeBase = require('native-base');

var ModalView = function ModalView(props) {
  var name = props.name,
      title = props.title,
      children = props.children,
      show = props.show,
      toggle = props.toggle,
      className = props.className,
      _props$buttons = props.buttons,
      buttons = _props$buttons === undefined ? [] : _props$buttons;


  return React.createElement(_nativeBase.View, null);
};

exports.default = ModalView;