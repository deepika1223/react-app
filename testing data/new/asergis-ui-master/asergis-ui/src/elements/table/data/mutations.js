import gql from 'graphql-tag';

export const SET_TABLE_PARAMS = gql`
  mutation setTableParams($tableId: TableId!, $params: TableParams!) {
    setTableParams(tableId: $tableId, params: $params) @client {
      tables {
        tableId
        params {
          page
          pageSize
          sorted {
            id
            desc
          }
          filtered{
            id
            value
          }
        }
      }
    }
  }
`;

export const RESET_TABLE = gql`
  mutation resetTable($tableId: TableId!) {
    resetTable(tableId: $tableId) @client {
      tables {
        tableId
      }
    }
  }
`;


