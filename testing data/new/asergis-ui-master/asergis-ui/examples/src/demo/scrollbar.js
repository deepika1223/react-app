//todo separate
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Scrollbar, Title } from '../../../src';

const DemoBlock = styled(View)`
  display: inline-block;
  padding: 10px;
`;

const Buttons = () => (
  <Fragment>
      <DemoBlock>
        <Title>Scrollbar </Title>
        <Scrollbar>Content</Scrollbar>
      </DemoBlock>
  </Fragment>
)

export default Buttons;