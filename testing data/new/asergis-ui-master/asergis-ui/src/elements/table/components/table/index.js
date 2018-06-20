import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import lifecycle from "react-pure-lifecycle";
import { store } from "../../../../lib";
import TableView from "./Table";
import Checkbox from "../../../forms/fields/checkbox";
import { Pagination } from '../../../../';

const TableMethods = {
  componentDidMount({ name }) {
    store.tables[name] = {
      filters: {page: 0, pageSize: 10, sorted: [], filtered: []},
      checkedItems: []
    }
  }
};

const Table = props => {
  const { name: tableId, children, changeFilter, pages, data, columns = [], onCheck, pagination } = props;
  const currentTable = store.tables[name] || {
    filters: { page: 0, pageSize: 10, sorted: [], filtered: [] }
  };
  const methods = {
    changeFilter(id, value) {
      const filterIndex = currentTable.filters.filtered.findIndex(
        el => el.id === id
      );
      if (value) {
        if (filterIndex >= 0) {
          currentTable.filters.filtered[filterIndex] = { id, value };
        } else {
          currentTable.filters.filtered.push({ id, value });
        }
      } else if (filterIndex >= 0) {
        currentTable.filters.filtered.splice(filterIndex, 1);
      }
      return changeFilter && changeFilter(currentTable.filters);
    },
    changeSorting(id, value) {
      return changeFilter && changeFilter(currentTable.filters);
    },
    changePage(page) {
      currentTable.filters.page = page-1;
      return changeFilter && changeFilter(currentTable.filters);
    },
    makeFieldContent(field, item) {
      const { name, content } = field;
      return content && typeof content === "function"
        ? content(item)
        : item[name];
    },
    onCheck({target: { name, checked, value }}) {
      //console.log('chec', name, checked, value)
      let storeData = store.tables[tableId].checkedItems
      if(name === 'all'){
        if(checked){
          data.forEach(item => {
            storeData.push(item.id)
          })
        } else {
          storeData = []
        }
      } else {
        let fieldIndex = storeData.findIndex(el => el == value);
        if(checked){
          if (fieldIndex >=0) {
            storeData[fieldIndex] = +value;
          } else {
            storeData.push(+value);
          }
        } else {
          fieldIndex >= 0 && storeData.splice(fieldIndex, 1);
        }
      }
      store.tables[tableId].checkedItems = [...storeData]
      onCheck(store.tables[tableId].checkedItems)
    }
  }
  const isWithFilter = columns.some(item => item.hasOwnProperty('filter'))

  return (
    <Fragment>
      <TableView {...props} isWithFilter={isWithFilter} checkbox={!!onCheck} store={store.tables[tableId] && store.tables[tableId].checkedItems} {...methods} />
      {pages && <Pagination pages={pages} changePage={methods.changePage}/>}
    </Fragment>
  );
};

Table.propTypes = {
  name: PropTypes.string.isRequired
};

export default lifecycle(TableMethods)(view(Table));
