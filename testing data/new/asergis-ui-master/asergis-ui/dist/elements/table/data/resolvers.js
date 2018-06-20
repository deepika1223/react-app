'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _queries = require('./queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	Mutation: {
		setTableParams: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_, _ref2, _ref3) {
				var tableId = _ref2.tableId,
				    params = _ref2.params;
				var cache = _ref3.cache;
				var cacheData, currentTable, newParams, tables;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log('params', params);
								cacheData = cache.readQuery({ query: _queries.GET_TABLE_PARAMS, variables: { tableId: tableId } });
								currentTable = cacheData.tables.find(function (el) {
									return tableId == el.tableId;
								});
								newParams = Object.assign({ page: 0, pageSize: 10, filtered: [], sorted: [] }, params);
								tables = currentTable ? cacheData.tables.map(function (table) {
									return currentTable.tableId == table.tableId ? Object.assign(currentTable, { params: newParams }) : table;
								}) : [{ __typename: 'Table', tableId: tableId, params: newParams }].concat((0, _toConsumableArray3.default)(cacheData.tables));

								cache.writeData({ data: { tables: tables } });
								console.log('tables', tables);
								return _context.abrupt('return', { tables: tables });

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, undefined);
			}));

			return function setTableParams(_x, _x2, _x3) {
				return _ref.apply(this, arguments);
			};
		}(),
		resetTable: function resetTable(_, _ref4, _ref5) {
			var tableId = _ref4.tableId;
			var cache = _ref5.cache;

			var data = {
				tables: []
			};
			cache.writeData({ data: data });
			return null;
		}
	}
};