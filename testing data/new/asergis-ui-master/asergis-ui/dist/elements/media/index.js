'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (min-width: ', 'px) {\n      ', '};\n    }\n  '], ['\n    @media (min-width: ', 'px) {\n      ', '};\n    }\n  ']);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = exports.sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
exports.default = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject, sizes[label], _styledComponents.css.apply(undefined, arguments));
  };
  return acc;
}, {});