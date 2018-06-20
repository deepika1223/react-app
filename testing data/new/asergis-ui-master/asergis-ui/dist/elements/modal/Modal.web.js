"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n"], ["\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  background: rgba(0, 0, 0, 0.2);\n  position: fixed;\n  z-index: 999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n"], ["\n  background: rgba(0, 0, 0, 0.2);\n  position: fixed;\n  z-index: 999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  background-color: #fff;\n  margin: auto;\n  border: 1px solid #888;\n  width: 100%;\n  border-radius: ", ";\n  ", " box-shadow: 0 0 1px 2px #00000021;\n\n  &.fade-enter {\n    animation-duration: 0.5s;\n    animation-fill-mode: both;\n  }\n  &.fade-enter-active {\n    animation-name: ", ";\n  }\n"], ["\n  background-color: #fff;\n  margin: auto;\n  border: 1px solid #888;\n  width: 100%;\n  border-radius: ", ";\n  ", " box-shadow: 0 0 1px 2px #00000021;\n\n  &.fade-enter {\n    animation-duration: 0.5s;\n    animation-fill-mode: both;\n  }\n  &.fade-enter-active {\n    animation-name: ", ";\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n\n  max-width: ", ";\n\n  "], ["\n\n  max-width: ", ";\n\n  "]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  padding: 15px;\n"], ["\n  padding: 15px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  padding: 9px 15px;\n  background-color: #fff;\n"], ["\n  padding: 9px 15px;\n  background-color: #fff;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  background: #fff;\n  padding: 20px;\n"], ["\n  background: #fff;\n  padding: 20px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAddonsCssTransitionGroup = require("react-addons-css-transition-group");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log("media", Body, media);

var fadeDown = (0, _styledComponents.keyframes)(_templateObject);

var ModalWrap = _styledComponents2.default.div(_templateObject2);

var ModalContent = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.bdr ? props.bdr : "0px";
}, _.media.tablet(_templateObject4, function (props) {
  return props.width ? props.width : "75%";
}), fadeDown);

var ModalBody = _styledComponents2.default.div(_templateObject5);

var ModalHeader = _styledComponents2.default.div(_templateObject6);

var ModalFooter = _styledComponents2.default.div(_templateObject7);

var ModalView = function ModalView(props) {
  var name = props.name,
      title = props.title,
      children = props.children,
      show = props.show,
      toggle = props.toggle,
      width = props.width,
      bdr = props.bdr,
      _props$buttons = props.buttons,
      buttons = _props$buttons === undefined ? [] : _props$buttons,
      attr = (0, _objectWithoutProperties3.default)(props, ["name", "title", "children", "show", "toggle", "width", "bdr", "buttons"]);


  return _react2.default.createElement(
    "div",
    null,
    show && _react2.default.createElement(
      ModalWrap,
      (0, _extends3.default)({ name: name }, attr),
      _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          transitionName: "fade",
          component: _react.Fragment,
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 500
        },
        _react2.default.createElement(
          ModalContent,
          { width: width, bdr: bdr },
          _react2.default.createElement(
            ModalHeader,
            null,
            _react2.default.createElement(
              _.Title,
              { capitalize: true, primary: true, align: "left" },
              title
            )
          ),
          _react2.default.createElement(
            ModalBody,
            null,
            children
          ),
          _react2.default.createElement(
            ModalFooter,
            null,
            buttons.map(function (_ref, idx) {
              var name = _ref.name,
                  action = _ref.action,
                  attr = (0, _objectWithoutProperties3.default)(_ref, ["name", "action"]);
              return _react2.default.createElement(
                _.Button,
                (0, _extends3.default)({
                  key: idx,
                  onClick: action ? action : toggle
                }, attr),
                name
              );
            }),
            _react2.default.createElement(
              _.Button,
              { onClick: toggle, color: "secondary" },
              "Cancel"
            )
          )
        )
      )
    )
  );
};

exports.default = ModalView;