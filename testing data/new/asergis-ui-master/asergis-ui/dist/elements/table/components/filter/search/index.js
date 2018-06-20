'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(props) {
	console.log('props in Search', props);
	var changeFilterField = props.changeFilterField,
	    attr = (0, _objectWithoutProperties3.default)(props, ['changeFilterField']);


	return _react2.default.createElement(_Search2.default, (0, _extends3.default)({}, attr, { onChange: changeFilterField }));
};

Search.propTypes = {
	name: _propTypes2.default.string.isRequired
};

exports.default = Search;