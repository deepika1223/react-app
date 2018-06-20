//todo separate
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Alphabet } from '../../../src';

const DemoBlock = styled(View)`
  display: inline-block;
  padding: 10px;
`;

const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Buttons = () => (
  <Fragment>
      <DemoBlock>
        <Alphabet>
          <li>
            <a href="# ">All</a>
          </li>
          {alphabet.map((item, index) => (
            <li key={index}>
              <a href={'#' + item}>{item}</a>
            </li>
          ))}
        </Alphabet>
      </DemoBlock>
  </Fragment>
)

export default Buttons;