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

var _reactEasyState = require('react-easy-state');

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paginationStore = (0, _reactEasyState.store)({ currentPage: 1, inputValue: 1 });

var Pagination = function Pagination(props) {
  var pages = props.pages,
      _changePage = props.changePage;


  var methods = {
    onChange: function onChange(_ref) {
      var target = _ref.target;
      var value = target.value;

      paginationStore.inputValue = value;
    },
    onBlur: function onBlur() {
      paginationStore.inputValue = paginationStore.currentPage;
    },
    prevPage: function prevPage() {
      if (paginationStore.currentPage > 1) {
        paginationStore.currentPage--;
        methods.changePage();
      }
    },
    nextPage: function nextPage() {
      if (paginationStore.currentPage < pages) {
        paginationStore.currentPage++;
        methods.changePage();
      }
    },
    setPage: function setPage(_ref2) {
      var keyCode = _ref2.keyCode,
          target = _ref2.target;
      var value = target.value;

      if (keyCode == 13) {
        if (value < 1) {
          paginationStore.currentPage = 1;
        } else if (value > pages) {
          paginationStore.currentPage = pages;
        } else {
          paginationStore.currentPage = value;
        }
        methods.changePage();
      }
    },
    changePage: function changePage() {
      var currentPage = paginationStore.currentPage;

      paginationStore.inputValue = currentPage;
      _changePage && _changePage(currentPage);
    }
  };

  return _react2.default.createElement(_Pagination2.default, (0, _extends3.default)({ pages: pages, currentPage: paginationStore.currentPage, inputValue: paginationStore.inputValue }, methods));
};

Pagination.propTypes = {
  pages: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactEasyState.view)(Pagination);