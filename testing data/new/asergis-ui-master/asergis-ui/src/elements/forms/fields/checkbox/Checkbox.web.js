import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Span = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: '';
  }
`;

const Wrap = styled.label`
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin-bottom: 0;
  cursor: pointer;
  input {
    display: none;
    & + ${Span} {
      min-width: 18px;
      min-height: 18px;
      background: #ffffff;
      border: 2px solid #d4d0d0;
      border-radius: 4px;
      margin-right: 10px;
      vertical-align: middle;
      &:after {
        width: 0;
        transition: 0.3s width;
      }
    }
    &:checked {
      & + ${Span} {
        background: #0085bf;
        border: 2px solid #0085bf;
        &:after {
          left: 5px;
          top: 1px;
          position: absolute;
          width: 5px;
          height: 10px;
          display: block;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
`;

const Checkbox = ({ label, children, value, group, defaultValue, className, arr, index, ...props }) => {
  return (
    <Wrap className={className}>
      <input type="checkbox" {...props} checked={value} group={group} arr={arr} index={index} />
      <Span />
      {label || children}
    </Wrap>
  );
};

export default Checkbox;
