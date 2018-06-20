import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FormGroup } from "../../decorators";

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
      width: 60px;
      height: 28px;
      border: 2px solid #d4d0d0;
      border-radius: 20px;
      &:after {
        position: absolute;
        height: 20px;
        width: 20px;
        left: 2px;
        top: 2px;
        border-radius: 50%;
        display: inline-block;
        background-color: #d4d0d0;
        transform: translateX(0);
        transition: transform 0.3s, background 0.3s, border 0.3s;
      }
    }
    &:checked {
      & + ${Span} {
        border: 2px solid #0085bf;
        &:after {
          background-color: #0085bf;
          transform: translateX(32px);
        }
      }
    }
  }
`;

const Switch = ({ label, children, value, className, inline, onChange,  ...props }) => {
  return (
    <FormGroup {...props}>
      <Wrap className={className}>
        <input type="checkbox" {...props} onClick={e => onChange(e)} />
        <Span />
        {label || children}
      </Wrap>
    </FormGroup>
  );
};

export default Switch;
