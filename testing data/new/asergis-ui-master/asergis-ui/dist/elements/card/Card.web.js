'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardLink = exports.CardText = exports.CardSubtitle = exports.CardTitle = exports.CardBody = exports.CardImgOverlay = exports.CardImg = exports.CardHeader = exports.Card = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n'], ['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding:0 15px;\n  max-width:1200px;\n  margin:0 auto;\n'], ['\n  padding:0 15px;\n  max-width:1200px;\n  margin:0 auto;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  border-radius: calc(0.25rem - 1px);\n  ', '\n  ', '\n'], ['\n  width: 100%;\n  border-radius: calc(0.25rem - 1px);\n  ', '\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    border-top-left-radius: calc(0.25rem - 1px);\n    border-top-right-radius: calc(0.25rem - 1px);'], ['\n    border-top-left-radius: calc(0.25rem - 1px);\n    border-top-right-radius: calc(0.25rem - 1px);']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    border-bottom-right-radius: calc(0.25rem - 1px);\n    border-bottom-left-radius: calc(0.25rem - 1px);\n  '], ['\n    border-bottom-right-radius: calc(0.25rem - 1px);\n    border-bottom-left-radius: calc(0.25rem - 1px);\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1 1 auto;\n  padding: 1.25rem;\n'], ['\n  flex: 1 1 auto;\n  padding: 1.25rem;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 0.75rem;\n'], ['\n  margin-bottom: 0.75rem;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Routing = require('../../../Routing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = exports.Card = _styledComponents2.default.div(_templateObject);

var CardHeader = exports.CardHeader = _styledComponents2.default.div(_templateObject2);

var CardImg = exports.CardImg = _styledComponents2.default.img(_templateObject3, function (_ref) {
  var top = _ref.top;
  return top && (0, _styledComponents.css)(_templateObject4);
}, function (_ref2) {
  var bottom = _ref2.bottom;
  return bottom && (0, _styledComponents.css)(_templateObject5);
});

var CardImgOverlay = exports.CardImgOverlay = _styledComponents2.default.div(_templateObject6);

var CardBody = exports.CardBody = _styledComponents2.default.div(_templateObject7);

var CardTitle = exports.CardTitle = _styledComponents2.default.h5(_templateObject8);

var CardSubtitle = exports.CardSubtitle = _styledComponents2.default.h6(_templateObject2);

var CardText = exports.CardText = _styledComponents2.default.p(_templateObject2);

var CardLink = exports.CardLink = (0, _styledComponents2.default)(_Routing.Link)(_templateObject2);