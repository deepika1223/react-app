'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\nposition: relative;\nmargin:0px 10px 0px 10px;\ndisplay:inline-block;\ncolor: #C3C1C1;\nfont-size:20px;\n&:after{\n  width:20px;\n  height:20px;\n  position:absolute;\n  content: "', '";\n  border-radius:50%;\n  background-color:#F20D49;\n  color:#ffffff;\n  font-size:10px;\n  top:-6px;\n  left:6px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  border:2px solid #fff;\n}\n'], ['\nposition: relative;\nmargin:0px 10px 0px 10px;\ndisplay:inline-block;\ncolor: #C3C1C1;\nfont-size:20px;\n&:after{\n  width:20px;\n  height:20px;\n  position:absolute;\n  content: "', '";\n  border-radius:50%;\n  background-color:#F20D49;\n  color:#ffffff;\n  font-size:10px;\n  top:-6px;\n  left:6px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  border:2px solid #fff;\n}\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = exports.Badge = _styledComponents2.default.span(_templateObject, function (props) {
  return props.value;
});