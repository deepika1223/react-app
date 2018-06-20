

import React from "react";
import PropTypes from 'prop-types';
import { store, view } from 'react-easy-state';
import PaginationView from './Pagination';

const paginationStore = store({ currentPage: 1, inputValue: 1 });

const Pagination = (props) => {
  const { pages, changePage } = props;

  const methods = {
    onChange({target}) {
      let { value } = target;
      paginationStore.inputValue = value;
    },
    onBlur() {
      paginationStore.inputValue = paginationStore.currentPage
    },
    prevPage() {
      if (paginationStore.currentPage > 1){
        paginationStore.currentPage--;
        methods.changePage();
      }
    },
    nextPage() {
      if (paginationStore.currentPage < pages){
        paginationStore.currentPage++;
        methods.changePage();
      }
    },
    setPage({ keyCode, target }) {
      let { value } = target;
      if (keyCode == 13) {
        if (value < 1) {
          paginationStore.currentPage = 1;
        } else if (value > pages){
          paginationStore.currentPage = pages;
        } else {
          paginationStore.currentPage = value;
        }
        methods.changePage();
      }
    },
    changePage(){
      const { currentPage } = paginationStore;
      paginationStore.inputValue = currentPage;
      changePage && changePage(currentPage)
    }
  }

	return (
    <PaginationView pages={pages} currentPage={paginationStore.currentPage} inputValue={paginationStore.inputValue} {...methods}/>
  );
};

Pagination.propTypes = {
	pages: PropTypes.number.isRequired
};

export default view(Pagination);


