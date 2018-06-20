'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTipToolsPanel = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  visibility: hidden;\n  position: absolute;\n  max-width: 120px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 6px;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.6s;\n  ', ' ', ' font-size: 12px;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    border-width: 5px;\n    border-style: solid;\n  }\n'], ['\n  visibility: hidden;\n  position: absolute;\n  max-width: 120px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 6px;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.6s;\n  ', ' ', ' font-size: 12px;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    border-width: 5px;\n    border-style: solid;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      line-height: 30px;\n    '], ['\n      line-height: 30px;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n          white-space: normal;\n          '], ['\n          white-space: normal;\n          ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n          white-space: nowrap;\n        '], ['\n          white-space: nowrap;\n        ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-block;\n  color: #555;\n  ', ' &:hover {\n    ', ' {\n      visibility: visible;\n      opacity: 1;\n    }\n  }\n'], ['\n  position: relative;\n  display: inline-block;\n  color: #555;\n  ', ' &:hover {\n    ', ' {\n      visibility: visible;\n      opacity: 1;\n    }\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          bottom: 125%;\n          left: 50%;\n          transform: translateX(-50%);\n          &:after {\n            top: 100%;\n            left: 50%;\n            margin-left: -5px;\n            border-color: #555 transparent transparent transparent;\n          }\n        }\n      '], ['\n        ', ' {\n          bottom: 125%;\n          left: 50%;\n          transform: translateX(-50%);\n          &:after {\n            top: 100%;\n            left: 50%;\n            margin-left: -5px;\n            border-color: #555 transparent transparent transparent;\n          }\n        }\n      ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          top: -5px;\n          left: 125%;\n          &:after {\n            top: 50%;\n            right: 100%;\n            margin-top: -5px;\n            border-color: transparent #555 transparent transparent;\n          }\n        }\n      '], ['\n        ', ' {\n          top: -5px;\n          left: 125%;\n          &:after {\n            top: 50%;\n            right: 100%;\n            margin-top: -5px;\n            border-color: transparent #555 transparent transparent;\n          }\n        }\n      ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          top: -5px;\n          bottom: auto;\n          right: 128%;\n\n          &:after {\n            top: 50%;\n            left: 100%;\n            margin-top: -5px;\n            border-color: transparent transparent transparent #555;\n          }\n        }\n      '], ['\n        ', ' {\n          top: -5px;\n          bottom: auto;\n          right: 128%;\n\n          &:after {\n            top: 50%;\n            left: 100%;\n            margin-top: -5px;\n            border-color: transparent transparent transparent #555;\n          }\n        }\n      ']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          top: 135%;\n          left: 50%;\n          margin-left: -60px;\n          &:after {\n            bottom: 100%;\n            left: 50%;\n            margin-left: -5px;\n            border-color: transparent transparent #555 transparent;\n          }\n        }\n      '], ['\n        ', ' {\n          top: 135%;\n          left: 50%;\n          margin-left: -60px;\n          &:after {\n            bottom: 100%;\n            left: 50%;\n            margin-left: -5px;\n            border-color: transparent transparent #555 transparent;\n          }\n        }\n      ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n   width: 182px;\n  min-height: 172px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #6f6f70;\n  position: absolute;\n  left: 63px;\n  top: -56px;\n  z-index:2;\n  &:after {\n    right: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: \' \';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(255, 255, 255, 0);\n    border-right-color: #ffffff;\n    border-width: 15px;\n    margin-top: -16px;\n  }\n  &:before{\n    right: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: \' \';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(111, 111, 112, 0);\n    border-right-color: #6f6f70;\n    border-width: 16px;\n    margin-top: -16px;\n  }\n  }\n  .titleBox {\n    color: #ffffff;\n    background: #00658a;\n    display: flex;\n    align-items: center;\n    min-height: 50px;\n    div:first-child {\n      font-size: 32px;\n      width: 62px;\n      text-align: center;\n    }\n    div:last-child {\n      width: auto;\n      font-size: 12px;\n    }\n  }\n  .innerContainer {\n    padding: 15px;\n    min-height: 96px;\n    p {\n      font-size: 13px;\n      text-align: left;\n      color: #272727;\n    }\n  }\n  .learnMore {\n    color:#0084ba;\n    font-size: 14px;\n    padding: 0;\n    margin-right: 15px;\n    display: inline-block;\n    float: right;\n    font-weight: bold;\n  }\n'], ['\n   width: 182px;\n  min-height: 172px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #6f6f70;\n  position: absolute;\n  left: 63px;\n  top: -56px;\n  z-index:2;\n  &:after {\n    right: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: \' \';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(255, 255, 255, 0);\n    border-right-color: #ffffff;\n    border-width: 15px;\n    margin-top: -16px;\n  }\n  &:before{\n    right: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: \' \';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(111, 111, 112, 0);\n    border-right-color: #6f6f70;\n    border-width: 16px;\n    margin-top: -16px;\n  }\n  }\n  .titleBox {\n    color: #ffffff;\n    background: #00658a;\n    display: flex;\n    align-items: center;\n    min-height: 50px;\n    div:first-child {\n      font-size: 32px;\n      width: 62px;\n      text-align: center;\n    }\n    div:last-child {\n      width: auto;\n      font-size: 12px;\n    }\n  }\n  .innerContainer {\n    padding: 15px;\n    min-height: 96px;\n    p {\n      font-size: 13px;\n      text-align: left;\n      color: #272727;\n    }\n  }\n  .learnMore {\n    color:#0084ba;\n    font-size: 14px;\n    padding: 0;\n    margin-right: 15px;\n    display: inline-block;\n    float: right;\n    font-weight: bold;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolTipText = _styledComponents2.default.div(_templateObject, function (_ref) {
  var lineHeight = _ref.lineHeight;
  return lineHeight && (0, _styledComponents.css)(_templateObject2);
}, function (_ref2) {
  var whiteSpace = _ref2.whiteSpace;

  whiteSpace ? (0, _styledComponents.css)(_templateObject3) : (0, _styledComponents.css)(_templateObject4);
});

var ToolTipWrap = _styledComponents2.default.div(_templateObject5, function (_ref3) {
  var placement = _ref3.placement;

  if (placement === 'top') {
    return (0, _styledComponents.css)(_templateObject6, ToolTipText);
  } else if (placement === 'right') {
    return (0, _styledComponents.css)(_templateObject7, ToolTipText);
  } else if (placement === 'left') {
    return (0, _styledComponents.css)(_templateObject8, ToolTipText);
  } else if (placement === 'bottom') {
    return (0, _styledComponents.css)(_templateObject9, ToolTipText);
  }
}, ToolTipText);

var ToolTip = function ToolTip(_ref4) {
  var text = _ref4.text,
      placement = _ref4.placement,
      width = _ref4.width,
      whiteSpace = _ref4.whiteSpace,
      maxWidth = _ref4.maxWidth,
      children = _ref4.children,
      lineHeight = _ref4.lineHeight,
      props = (0, _objectWithoutProperties3.default)(_ref4, ['text', 'placement', 'width', 'whiteSpace', 'maxWidth', 'children', 'lineHeight']);
  return _react2.default.createElement(
    ToolTipWrap,
    (0, _extends3.default)({ placement: placement }, props),
    children,
    _react2.default.createElement(
      ToolTipText,
      {
        style: { width: width, maxWidth: maxWidth },
        lineHeight: lineHeight,
        whiteSpace: whiteSpace
      },
      text
    )
  );
};

ToolTip.defaultProps = {
  placement: 'top'
};
ToolTip.propTypes = {
  placement: _propTypes2.default.string,
  text: _propTypes2.default.isRequired,
  children: _propTypes2.default.node.isRequired
};

var ToolTipToolWrap = _styledComponents2.default.div(_templateObject10);

var ToolTipToolsPanel = exports.ToolTipToolsPanel = function ToolTipToolsPanel(_ref5) {
  var placement = _ref5.placement,
      icon = _ref5.icon,
      heading = _ref5.heading,
      text = _ref5.text,
      button = _ref5.button,
      children = _ref5.children,
      toLink = _ref5.toLink;

  return _react2.default.createElement(
    'div',
    null,
    children,
    _react2.default.createElement(
      ToolTipToolWrap,
      null,
      _react2.default.createElement(
        'div',
        { className: 'titleBox' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_icons2.default, { icon: icon })
        ),
        _react2.default.createElement(
          'div',
          null,
          heading
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'innerContainer' },
        _react2.default.createElement(
          'p',
          null,
          text
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'learnMore', to: toLink },
        'Learn More'
      )
    )
  );
};