import React, { Fragment } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { store, view } from 'react-easy-state';
import { Button, Preloader } from "../../../src";

const demoStore = store({ loading: false });

const DemoBlock = styled(View)`
  display: block;
  width: 400px;
  padding: 10px;
`;

export default view((props) => {
  const showPreloader = () => {
    demoStore.loading = true;
    setTimeout(() => demoStore.loading = false, 3000);
  }
  return (
    <Fragment>
      <DemoBlock>
        <Preloader loading={demoStore.loading}>
          <View><Text>Maing content after after loaded</Text></View>
          <Button onClick={showPreloader}>Show all preloaders</Button>
        </Preloader>
      </DemoBlock>
    </Fragment>
  )
});
