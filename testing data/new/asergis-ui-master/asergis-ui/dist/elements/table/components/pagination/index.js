"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Pagination } from '../../../../';

var Pagination = function Pagination(props) {
  var pageSize = props.pageSize,
      pagesCount = props.pagesCount,
      currentPabe = props.currentPabe,
      changeFilter = props.changeFilter;


  var methods = {
    onChange: function onChange() {
      //Pagination change
    }
  };

  return _react2.default.createElement(
    _react.Fragment,
    null,
    "|1|2|3|"
  );
};

Pagination.propTypes = {};

exports.default = Pagination;