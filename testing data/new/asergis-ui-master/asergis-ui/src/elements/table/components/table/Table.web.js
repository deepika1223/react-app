import React from "react";
import styled, { css } from "styled-components";
import Filter from "../filter";
import Checkbox from "../../../forms/fields/checkbox";
import Box from "../../../box";


export const Td = styled.td`
  padding: 20px;
  text-align: ${props => (props.align ? props.align : 'left')};
  font-size: 14px;
  color: #666;
  font-weight: 400;
  position: relative;
  white-space: nowrap;
`;

export const Th = styled.th`
  color: #262626;
  font-weight: 700;
  padding: 20px;
  font-size: 14px;
  white-space: nowrap;
  text-align: ${props => (props.align ? props.align : 'left')};
`;

export const Tr = styled.tr`
  position: relative;
`;
export const Tbody = styled.tbody`
  ${Tr} {
    border-top: solid 2px #f0f0f0;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  ${props =>
  props.border
    ? css`
          border: 1px solid #e0e3e6;
        `
    : css`
          border-top: solid 2px #e0e3e6;
          border-bottom: solid 2px #e0e3e6;
        `};
  ${Th} {
    ${props =>
props.border &&
css`
        border-right: 1px solid #e0e3e6;
        background-color: #f0f0f0;
      `};
  }
  ${Td} {
    ${props =>
      props.border &&
      css`
        border-right: 1px solid #e0e3e6;
      `};
  }
`;

export const TableResponsive = styled.div`
  overflow-x: auto;
  width: 100%;
`;
export const Thead = styled.thead``;

export const Tfoot = styled.tfoot``;

const TableView = props => {
  const {
    columns = [],
    data = [],
    makeFieldContent,
    changeFilter,
    onCheck,
    loading,
    header,
    isWithFilter,
    checkbox,
    store = [],
    ...attr
  } = props;
  return (
    <TableResponsive>
      <Table>
        {
        header !== false &&(
          <Thead>
            <Tr>
              {
              checkbox &&
              <Th key='checkbox'>
                <Checkbox
                name="all"
                value="all"
                methods = {{onChange: onCheck}} />
              </Th>
              }
              {columns.map((column, columnKey) => (
                <Th key={columnKey}>{column.title}</Th>
              ))}
            </Tr>
          </Thead>
        )
      }
        <Tbody>
        {
          isWithFilter && (
            <Tr>
              {checkbox && <Td key='checkbox'></Td>}
              {columns.map((column, columnKey) => (
                <Td key={columnKey}>
                  {column.filter && (
                    <Filter {...column} changeFilter={changeFilter} />
                  )}
                </Td>
              ))}
            </Tr>
          )
        }
          {data.map((item, itemKey) => (
            <Tr key={itemKey}>
              {checkbox &&
              <Td key={`check-${item.id}`}>
                <Checkbox
                  name={item.id}
                  value={item.id}
                  checked={ !!store.some(el => el === item.id) }
                  methods = {{onChange: onCheck}}
                />
              </Td>}
              {columns.map((column, columnKey) => (
                <Td key={columnKey}>{makeFieldContent(column, item)}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableResponsive>
  )
}

export default TableView;
