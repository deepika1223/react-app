'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardLink = exports.CardText = exports.CardSubtitle = exports.CardTitle = exports.CardBody = exports.CardImgOverlay = exports.CardImg = exports.CardHeader = exports.Card = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Routing = require('../../../Routing');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = exports.Card = (0, _styledComponents2.default)(_reactNative.View)(_templateObject);

var CardHeader = exports.CardHeader = (0, _styledComponents2.default)(_reactNative.View)(_templateObject);

var CardImg = exports.CardImg = (0, _styledComponents2.default)(_reactNative.Image)(_templateObject);

var CardImgOverlay = exports.CardImgOverlay = (0, _styledComponents2.default)(_reactNative.View)(_templateObject);

var CardBody = exports.CardBody = (0, _styledComponents2.default)(_reactNative.View)(_templateObject);

var CardTitle = exports.CardTitle = (0, _styledComponents2.default)(_reactNative.Text)(_templateObject);

var CardSubtitle = exports.CardSubtitle = (0, _styledComponents2.default)(_reactNative.Text)(_templateObject);

var CardText = exports.CardText = (0, _styledComponents2.default)(_reactNative.Text)(_templateObject);

var CardLink = exports.CardLink = (0, _styledComponents2.default)(_Routing.Link)(_templateObject);