'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolsPanel = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 62px;\n  height: calc(100% - 60px);\n  position: absolute;\n  left: 0;\n  top: 30px;\n  background: #fff;\n  transition: all 0.5s ease;\n  box-shadow: rgba(8, 8, 8, 0.06) 3px 2px 8px 0px;\n  &.active {\n    left: -64px;\n    transition: all 0.5s ease;\n  }\n  span {\n    color: #fff;\n    font-size: 12px;\n    background: #004564;\n    display: block;\n    text-align: center;\n    padding: 2px 0;\n  }\n  .arrow {\n    color: #156691;\n    font-size: 25px;\n    background: #ffffff;\n    border: none;\n    width: 26px;\n    height: 74px;\n    position: absolute;\n    right: -26px;\n    top: 71px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    cursor: pointer;\n    box-shadow: rgba(8, 8, 8, 0.06) 3px 2px 8px 0px;\n  }\n  .arrow:focus {\n    outline: none;\n  }\n  ul {\n    margin: 0;\n    padding: 0;\n    li {\n      list-style: none;\n      padding: 0;\n      position: relative;\n      & > a {\n        font-size: 28px;\n        color: #166590;\n        padding: 15px 0;\n        display: flex;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n      }\n      a.active {\n        border-left: 4px solid #166590;\n        padding-right: 4px;\n      }\n      & > div {\n        display: none;\n      }\n    }\n    li:hover {\n      & > a {\n        color: #ffffff;\n        background: #166590;\n      }\n      & > div {\n        display: block;\n      }\n    }\n  }\n'], ['\n  width: 62px;\n  height: calc(100% - 60px);\n  position: absolute;\n  left: 0;\n  top: 30px;\n  background: #fff;\n  transition: all 0.5s ease;\n  box-shadow: rgba(8, 8, 8, 0.06) 3px 2px 8px 0px;\n  &.active {\n    left: -64px;\n    transition: all 0.5s ease;\n  }\n  span {\n    color: #fff;\n    font-size: 12px;\n    background: #004564;\n    display: block;\n    text-align: center;\n    padding: 2px 0;\n  }\n  .arrow {\n    color: #156691;\n    font-size: 25px;\n    background: #ffffff;\n    border: none;\n    width: 26px;\n    height: 74px;\n    position: absolute;\n    right: -26px;\n    top: 71px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    cursor: pointer;\n    box-shadow: rgba(8, 8, 8, 0.06) 3px 2px 8px 0px;\n  }\n  .arrow:focus {\n    outline: none;\n  }\n  ul {\n    margin: 0;\n    padding: 0;\n    li {\n      list-style: none;\n      padding: 0;\n      position: relative;\n      & > a {\n        font-size: 28px;\n        color: #166590;\n        padding: 15px 0;\n        display: flex;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n      }\n      a.active {\n        border-left: 4px solid #166590;\n        padding-right: 4px;\n      }\n      & > div {\n        display: none;\n      }\n    }\n    li:hover {\n      & > a {\n        color: #ffffff;\n        background: #166590;\n      }\n      & > div {\n        display: block;\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _tooltip = require('../tooltip');

var _box = require('../box');

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);

var ToolsPanel = exports.ToolsPanel = function ToolsPanel(_ref) {
  var clickArrow = _ref.clickArrow,
      toolBarToggle = _ref.toolBarToggle,
      _ref$toolsList = _ref.toolsList,
      toolsList = _ref$toolsList === undefined ? [] : _ref$toolsList;
  return _react2.default.createElement(
    Wrap,
    { className: toolBarToggle ? 'active' : '' },
    _react2.default.createElement(
      'span',
      null,
      'Tools'
    ),
    _react2.default.createElement(
      'ul',
      null,
      toolsList.map(function (item) {
        return _react2.default.createElement(
          'li',
          { key: item.id },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: item.to },
            _react2.default.createElement(_icons2.default, { icon: item.icon })
          ),
          _react2.default.createElement(_tooltip.ToolTipToolsPanel, {
            icon: item.tooltip.icon,
            heading: item.tooltip.heading,
            text: item.tooltip.text,
            toLink: item.tooltip.to
          })
        );
      })
    ),
    _react2.default.createElement(
      'button',
      { className: 'arrow', onClick: clickArrow },
      toolBarToggle ? '»' : '«'
    )
  );
};