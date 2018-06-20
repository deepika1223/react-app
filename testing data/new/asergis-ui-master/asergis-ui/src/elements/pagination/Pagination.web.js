import React, { Component } from "react";
import styled from "styled-components";
import { FormControl, Text, Box, Svg } from '../../';

export const PaginationContainer = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  float: right;
`;

export const PageLi = styled.li`
  display: list-item;
  margin-left: 5px;
`;

export const Link = styled.button`
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: 2px solid #d9d9d9;
  width: 40px;
  height: 40px;
  &:focus {
    outline: 5px auto #e2e2e2;
  }
`;

const Pagination = props => {
  const { store, currentPage, inputValue, onChange, onBlur, setPage, prevPage, nextPage, pages = 1 } = props;

  return (
    <PaginationContainer>
      <PageLi onClick={prevPage}>
        <Box is={Link} css="border-radius: 5px 0px 0px 5px;" c="#d9d9d9">
          <Svg icon="left-page" />
        </Box>
      </PageLi>
      <PageLi>
        <Box
          is={FormControl}
          value={inputValue}
          onChange={onChange}
          onKeyUp={setPage}
          onBlur={onBlur}
          w="57"
          h="40"
          css="border-radius: 0px 5px 5px 0px;"
        />
      </PageLi>
      <PageLi>
        <Box is={Text} css="font-weight: 500" pt="8">
          of
        </Box>
      </PageLi>
      <PageLi>
        <Box is={Text} css="font-weight: 500" pt="8" c="#0085BF">
          {pages}
        </Box>
      </PageLi>
      <PageLi onClick={nextPage}>
        <Box is={Link} css="border-radius: 0px 5px 5px 0px;" c="#0085BF">
          <Svg icon="right-page" />
        </Box>
      </PageLi>
    </PaginationContainer>
  );
};


export default Pagination;