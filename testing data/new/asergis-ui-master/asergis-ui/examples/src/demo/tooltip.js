//todo separate
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Box, ToolTip } from '../../../src';

const DemoBlock = styled(View)`
  display: inline-block;
  padding: 30px;
`;

const Buttons = () => (
  <Fragment>
      <DemoBlock>
        <Box is={ToolTip} text="edit" placement="top" mr="10px">
          ToolTip
        </Box>
      </DemoBlock>
  </Fragment>
)

export default Buttons;