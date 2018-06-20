'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESET_TABLE = exports.SET_TABLE_PARAMS = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation setTableParams($tableId: TableId!, $params: TableParams!) {\n    setTableParams(tableId: $tableId, params: $params) @client {\n      tables {\n        tableId\n        params {\n          page\n          pageSize\n          sorted {\n            id\n            desc\n          }\n          filtered{\n            id\n            value\n          }\n        }\n      }\n    }\n  }\n'], ['\n  mutation setTableParams($tableId: TableId!, $params: TableParams!) {\n    setTableParams(tableId: $tableId, params: $params) @client {\n      tables {\n        tableId\n        params {\n          page\n          pageSize\n          sorted {\n            id\n            desc\n          }\n          filtered{\n            id\n            value\n          }\n        }\n      }\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation resetTable($tableId: TableId!) {\n    resetTable(tableId: $tableId) @client {\n      tables {\n        tableId\n      }\n    }\n  }\n'], ['\n  mutation resetTable($tableId: TableId!) {\n    resetTable(tableId: $tableId) @client {\n      tables {\n        tableId\n      }\n    }\n  }\n']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_TABLE_PARAMS = exports.SET_TABLE_PARAMS = (0, _graphqlTag2.default)(_templateObject);

var RESET_TABLE = exports.RESET_TABLE = (0, _graphqlTag2.default)(_templateObject2);