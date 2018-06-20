"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEasyState = require("react-easy-state");

var _reactPureLifecycle = require("react-pure-lifecycle");

var _reactPureLifecycle2 = _interopRequireDefault(_reactPureLifecycle);

var _lib = require("../../../../lib");

var _Table = require("./Table");

var _Table2 = _interopRequireDefault(_Table);

var _checkbox = require("../../../forms/fields/checkbox");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _ = require("../../../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableMethods = {
  componentDidMount: function componentDidMount(_ref) {
    var name = _ref.name;

    _lib.store.tables[name] = {
      filters: { page: 0, pageSize: 10, sorted: [], filtered: [] },
      checkedItems: []
    };
  }
};

var Table = function Table(props) {
  var tableId = props.name,
      children = props.children,
      _changeFilter = props.changeFilter,
      pages = props.pages,
      data = props.data,
      _props$columns = props.columns,
      columns = _props$columns === undefined ? [] : _props$columns,
      _onCheck = props.onCheck,
      pagination = props.pagination;

  var currentTable = _lib.store.tables[name] || {
    filters: { page: 0, pageSize: 10, sorted: [], filtered: [] }
  };
  var methods = {
    changeFilter: function changeFilter(id, value) {
      var filterIndex = currentTable.filters.filtered.findIndex(function (el) {
        return el.id === id;
      });
      if (value) {
        if (filterIndex >= 0) {
          currentTable.filters.filtered[filterIndex] = { id: id, value: value };
        } else {
          currentTable.filters.filtered.push({ id: id, value: value });
        }
      } else if (filterIndex >= 0) {
        currentTable.filters.filtered.splice(filterIndex, 1);
      }
      return _changeFilter && _changeFilter(currentTable.filters);
    },
    changeSorting: function changeSorting(id, value) {
      return _changeFilter && _changeFilter(currentTable.filters);
    },
    changePage: function changePage(page) {
      currentTable.filters.page = page - 1;
      return _changeFilter && _changeFilter(currentTable.filters);
    },
    makeFieldContent: function makeFieldContent(field, item) {
      var name = field.name,
          content = field.content;

      return content && typeof content === "function" ? content(item) : item[name];
    },
    onCheck: function onCheck(_ref2) {
      var _ref2$target = _ref2.target,
          name = _ref2$target.name,
          checked = _ref2$target.checked,
          value = _ref2$target.value;

      //console.log('chec', name, checked, value)
      var storeData = _lib.store.tables[tableId].checkedItems;
      if (name === 'all') {
        if (checked) {
          data.forEach(function (item) {
            storeData.push(item.id);
          });
        } else {
          storeData = [];
        }
      } else {
        var fieldIndex = storeData.findIndex(function (el) {
          return el == value;
        });
        if (checked) {
          if (fieldIndex >= 0) {
            storeData[fieldIndex] = +value;
          } else {
            storeData.push(+value);
          }
        } else {
          fieldIndex >= 0 && storeData.splice(fieldIndex, 1);
        }
      }
      _lib.store.tables[tableId].checkedItems = [].concat((0, _toConsumableArray3.default)(storeData));
      _onCheck(_lib.store.tables[tableId].checkedItems);
    }
  };
  var isWithFilter = columns.some(function (item) {
    return item.hasOwnProperty('filter');
  });

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Table2.default, (0, _extends3.default)({}, props, { isWithFilter: isWithFilter, checkbox: !!_onCheck, store: _lib.store.tables[tableId] && _lib.store.tables[tableId].checkedItems }, methods)),
    pages && _react2.default.createElement(_.Pagination, { pages: pages, changePage: methods.changePage })
  );
};

Table.propTypes = {
  name: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactPureLifecycle2.default)(TableMethods)((0, _reactEasyState.view)(Table));