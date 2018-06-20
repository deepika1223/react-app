//todo separate
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Title, Heading, Text, Box } from '../../../src';

const DemoBlock = styled(View)`
  display: inline-block;
  padding: 10px;
`;

const Buttons = () => (
  <Fragment>
      <DemoBlock>
        <Title>Title</Title>
        <Heading>Heading</Heading>
        <Text>Text</Text>
      </DemoBlock>
  </Fragment>
)

export default Buttons;