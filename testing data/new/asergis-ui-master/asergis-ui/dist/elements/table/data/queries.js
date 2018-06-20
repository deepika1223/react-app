'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GET_TABLE_PARAMS = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tquery getTableParams($tableId: TableId!) {\n\t\ttables @client {\n\t\t\ttableId\n\t\t\tparams {\n\t\t\t\tpage\n\t\t\t\tpageSize\n\t\t\t\tsorted {\n\t\t\t\t\tid\n\t\t\t\t\tdesc\n\t\t\t\t}\n\t\t\t\tfiltered {\n\t\t\t\t\tid\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'], ['\n\tquery getTableParams($tableId: TableId!) {\n\t\ttables @client {\n\t\t\ttableId\n\t\t\tparams {\n\t\t\t\tpage\n\t\t\t\tpageSize\n\t\t\t\tsorted {\n\t\t\t\t\tid\n\t\t\t\t\tdesc\n\t\t\t\t}\n\t\t\t\tfiltered {\n\t\t\t\t\tid\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_TABLE_PARAMS = exports.GET_TABLE_PARAMS = (0, _graphqlTag2.default)(_templateObject);