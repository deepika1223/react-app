'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../../../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(props) {
  var name = props.name,
      filter = props.filter,
      content = props.content,
      changeFilter = props.changeFilter;

  //TODO: dynamic value from state

  var methods = {
    onChange: function onChange(_ref) {
      var target = _ref.target;

      changeFilter(name, target.value);
    }
  };

  return _react2.default.createElement(
    _react.Fragment,
    null,
    filter.type === 'text' && _react2.default.createElement(
      _.Box,
      { is: _.FormGroup, mb: '0' },
      _react2.default.createElement(_.Box, (0, _extends3.default)({
        is: _.FormControl,
        pr: '35',
        placeholder: 'search',
        name: 'tableFilter'
      }, methods)),
      _react2.default.createElement(_.Box, { is: _.Svg, c: '#b3b3b3', icon: 'search' })
    ),
    filter.type === 'date' && _react2.default.createElement(_.DateTime, (0, _extends3.default)({
      dateFormat: 'DD/MM/YYYY',
      placeholder: 'Date',
      icon: 'calendar',
      name: 'tableFilter',
      mb: '0'
    }, methods)),
    filter.type === 'time' && _react2.default.createElement(_.DateTime, (0, _extends3.default)({
      timeFormat: 'HH:MM:SS',
      placeholder: 'Time',
      icon: 'calendar',
      name: 'tableFilter',
      mb: '0'
    }, methods)),
    filter.type === 'select' && _react2.default.createElement(_.Select, (0, _extends3.default)({
      name: 'tableFilter',
      options: filter.options,
      align: 'center',
      Dstyle: 'border',
      w: '100%',
      mb: '0'
    }, methods)),
    filter.type === 'button' && _react2.default.createElement(
      _.Button,
      { danger: true, onClick: filter.onClick },
      filter.name
    )
  );
};

Filter.propTypes = {
  name: _propTypes2.default.string.isRequired
};

exports.default = Filter;