import { GET_TABLE_PARAMS } from './queries';

export default {
	Mutation: {
		setTableParams: async (_, { tableId, params }, { cache }) => {
			console.log('params', params)
			const cacheData = cache.readQuery({ query: GET_TABLE_PARAMS, variables: { tableId } });
      const currentTable = cacheData.tables.find(el => tableId == el.tableId);
      const newParams = Object.assign({page: 0, pageSize: 10, filtered: [], sorted: []}, params);
      const tables = currentTable 
        ? cacheData.tables.map(table => currentTable.tableId == table.tableId ? Object.assign(currentTable, {params: newParams}) : table) 
        : [{ __typename: 'Table', tableId, params: newParams}, ...cacheData.tables];
      cache.writeData({ data: { tables } });
			console.log('tables', tables)
      return { tables };
		},
		resetTable: (_, { tableId }, { cache }) => {
			const data = {
				tables: []
			};
			cache.writeData({ data });
			return null;
		}
	}
};
