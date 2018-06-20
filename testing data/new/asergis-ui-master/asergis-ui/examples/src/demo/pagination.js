import React, { Fragment } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Pagination } from "../../../src";

const DemoBlock = styled(View)`
  display: block;
  width: 400px;
  padding: 10px;
`;

const changePage = page => {
 console.log('Current page is:', page);
};

export default () => (
  <Fragment>
    <DemoBlock>
      <Pagination
        pages={7}
        changePage={changePage}
      />
    </DemoBlock>
  </Fragment>
);
