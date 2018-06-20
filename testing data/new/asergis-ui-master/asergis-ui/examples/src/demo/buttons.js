import React, { Fragment } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Button } from '../../../src';

const DemoBlock = styled(View)`
  display: inline-block;
  padding: 10px;
`;

const Buttons = () => (
  <Fragment>
      <DemoBlock>
        <Button>Primary button</Button>
        <Button>Button 2</Button>
      </DemoBlock>
  </Fragment>
);

export default Buttons;