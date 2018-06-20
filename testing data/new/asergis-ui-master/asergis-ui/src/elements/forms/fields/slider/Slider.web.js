import React from 'react';
import styled from 'styled-components';
import { FormControl, Label, Star } from '../../decorators';
import Box, { Flex } from '../../../box';
import { Col } from '../../../grid';

const Slidecontainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 15px;
  margin-top: 10px;
`;
const Badge = styled.span`
  color: #0085bf;
  font-size: 12px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    border: 4px solid transparent;
    border-bottom-color: #0085bf;
    left: 50%;
    transform: translateX(-50%);
    top: -12px;
  }
`;
const Fill = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: inline-block;
  pointer-events: none;
  left: 0;
  top: 6.5px;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: ${({ val }) => (val ? val : 'calc(100% - 5px)')};
  height: 5px;
  background: #0085bf;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: none;
  }
`;
const Slider = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  appearance: none;
  width: 100%;
  height: 20px;
  background: transparent;
  padding: 0;
  box-sizing: border-boox;
  cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    border: 0 solid #0085bf;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #0085bf;
    cursor: pointer;
    margin-top: -6px;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 8px;
  }

  &::-moz-range-thumb {
    border: 0 solid #0085bf;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #0085bf;
    cursor: pointer;
  }

  &::-moz-range-track {
    box-sizing: border-box;
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 8px;
  }

  &::-ms-thumb {
    box-shadow: 0 0 0 0 #0085bf;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #0085bf;
    cursor: pointer;
    margin-top: 2px;
    box-sizing: border-box;
    border: 0;
  }

  &:focus::-ms-thumb {
    border: 0;
  }

  &::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 8px;
    color: transparent;
    box-sizing: border-box;
  }

  &::-ms-fill-lower {
    background: #0085bf;
    border-radius: 8px;
    border: 1px solid #0085bf;
  }

  &::-ms-fill-upper {
    background: #f5f5f5;
  }

  &::-ms-tooltip {
    display: none;
  }
`;

export default function range({
    options: { min, max },
    value,
    className,
    label,
    required,
    error,
    ...props
  }) {
  return (
    <Box is={Col} lg={12}>
      {label && (
        <Label>
          {label}
          {required && <Star />}
        </Label>
      )}
      <Flex nowrap>
        <Box w="100%" pr="20">
          <Slidecontainer className={className}>
            <Slider type="range" min={min} max={max} value={value} {...props} />
            <Fill val={ value || value === 0 ? ((value - min) * 100) / (max - min) + '%' : '50%' } />
          </Slidecontainer>
          <Flex nowrap>
            <Box w="100%">
              <Badge>{min}</Badge>
            </Box>
            <Box>
              <Badge>{max}</Badge>
            </Box>
          </Flex>
        </Box>
        <Box css="min-width:52px" w="52">
          <FormControl value={value} min={min} max={max} readOnly />
        </Box>
      </Flex>
    </Box>
  );
}

const propTypes = {};

const defaultProps = {};

range.propTypes = propTypes;
range.defaultProps = defaultProps;
