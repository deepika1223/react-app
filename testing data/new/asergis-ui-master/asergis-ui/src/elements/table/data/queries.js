import gql from 'graphql-tag';

export const GET_TABLE_PARAMS = gql`
	query getTableParams($tableId: TableId!) {
		tables @client {
			tableId
			params {
				page
				pageSize
				sorted {
					id
					desc
				}
				filtered {
					id
					value
				}
			}
		}
	}
`;
