'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 15px;\n  margin-top: 10px;\n'], ['\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 15px;\n  margin-top: 10px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: #0085bf;\n  font-size: 12px;\n  position: relative;\n  &:before {\n    content: \'\';\n    position: absolute;\n    border: 4px solid transparent;\n    border-bottom-color: #0085bf;\n    left: 50%;\n    transform: translateX(-50%);\n    top: -12px;\n  }\n'], ['\n  color: #0085bf;\n  font-size: 12px;\n  position: relative;\n  &:before {\n    content: \'\';\n    position: absolute;\n    border: 4px solid transparent;\n    border-bottom-color: #0085bf;\n    left: 50%;\n    transform: translateX(-50%);\n    top: -12px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  box-sizing: border-box;\n  display: inline-block;\n  pointer-events: none;\n  left: 0;\n  top: 6.5px;\n  border-radius: 8px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  width: ', ';\n  height: 5px;\n  background: #0085bf;\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    display: none;\n  }\n'], ['\n  position: absolute;\n  box-sizing: border-box;\n  display: inline-block;\n  pointer-events: none;\n  left: 0;\n  top: 6.5px;\n  border-radius: 8px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  width: ', ';\n  height: 5px;\n  background: #0085bf;\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    display: none;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  appearance: none;\n  width: 100%;\n  height: 20px;\n  background: transparent;\n  padding: 0;\n  box-sizing: border-boox;\n  cursor: pointer;\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  &::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    appearance: none;\n    border: 0 solid #0085bf;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: #0085bf;\n    cursor: pointer;\n    margin-top: -6px;\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 8px;\n  }\n\n  &::-moz-range-thumb {\n    border: 0 solid #0085bf;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: #0085bf;\n    cursor: pointer;\n  }\n\n  &::-moz-range-track {\n    box-sizing: border-box;\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 8px;\n  }\n\n  &::-ms-thumb {\n    box-shadow: 0 0 0 0 #0085bf;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: #0085bf;\n    cursor: pointer;\n    margin-top: 2px;\n    box-sizing: border-box;\n    border: 0;\n  }\n\n  &:focus::-ms-thumb {\n    border: 0;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 8px;\n    color: transparent;\n    box-sizing: border-box;\n  }\n\n  &::-ms-fill-lower {\n    background: #0085bf;\n    border-radius: 8px;\n    border: 1px solid #0085bf;\n  }\n\n  &::-ms-fill-upper {\n    background: #f5f5f5;\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  appearance: none;\n  width: 100%;\n  height: 20px;\n  background: transparent;\n  padding: 0;\n  box-sizing: border-boox;\n  cursor: pointer;\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  &::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    appearance: none;\n    border: 0 solid #0085bf;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: #0085bf;\n    cursor: pointer;\n    margin-top: -6px;\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 8px;\n  }\n\n  &::-moz-range-thumb {\n    border: 0 solid #0085bf;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: #0085bf;\n    cursor: pointer;\n  }\n\n  &::-moz-range-track {\n    box-sizing: border-box;\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 8px;\n  }\n\n  &::-ms-thumb {\n    box-shadow: 0 0 0 0 #0085bf;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: #0085bf;\n    cursor: pointer;\n    margin-top: 2px;\n    box-sizing: border-box;\n    border: 0;\n  }\n\n  &:focus::-ms-thumb {\n    border: 0;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 8px;\n    color: transparent;\n    box-sizing: border-box;\n  }\n\n  &::-ms-fill-lower {\n    background: #0085bf;\n    border-radius: 8px;\n    border: 1px solid #0085bf;\n  }\n\n  &::-ms-fill-upper {\n    background: #f5f5f5;\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n']);

exports.default = range;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _decorators = require('../../decorators');

var _box = require('../../../box');

var _box2 = _interopRequireDefault(_box);

var _grid = require('../../../grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slidecontainer = _styledComponents2.default.div(_templateObject);
var Badge = _styledComponents2.default.span(_templateObject2);
var Fill = _styledComponents2.default.div(_templateObject3, function (_ref) {
  var val = _ref.val;
  return val ? val : 'calc(100% - 5px)';
});
var Slider = _styledComponents2.default.input(_templateObject4);

function range(_ref2) {
  var _ref2$options = _ref2.options,
      min = _ref2$options.min,
      max = _ref2$options.max,
      value = _ref2.value,
      className = _ref2.className,
      label = _ref2.label,
      required = _ref2.required,
      error = _ref2.error,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['options', 'value', 'className', 'label', 'required', 'error']);

  return _react2.default.createElement(
    _box2.default,
    { is: _grid.Col, lg: 12 },
    label && _react2.default.createElement(
      _decorators.Label,
      null,
      label,
      required && _react2.default.createElement(_decorators.Star, null)
    ),
    _react2.default.createElement(
      _box.Flex,
      { nowrap: true },
      _react2.default.createElement(
        _box2.default,
        { w: '100%', pr: '20' },
        _react2.default.createElement(
          Slidecontainer,
          { className: className },
          _react2.default.createElement(Slider, (0, _extends3.default)({ type: 'range', min: min, max: max, value: value }, props)),
          _react2.default.createElement(Fill, { val: value || value === 0 ? (value - min) * 100 / (max - min) + '%' : '50%' })
        ),
        _react2.default.createElement(
          _box.Flex,
          { nowrap: true },
          _react2.default.createElement(
            _box2.default,
            { w: '100%' },
            _react2.default.createElement(
              Badge,
              null,
              min
            )
          ),
          _react2.default.createElement(
            _box2.default,
            null,
            _react2.default.createElement(
              Badge,
              null,
              max
            )
          )
        )
      ),
      _react2.default.createElement(
        _box2.default,
        { css: 'min-width:52px', w: '52' },
        _react2.default.createElement(_decorators.FormControl, { value: value, min: min, max: max, readOnly: true })
      )
    )
  );
}

var propTypes = {};

var defaultProps = {};

range.propTypes = propTypes;
range.defaultProps = defaultProps;