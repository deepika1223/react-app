import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Label, Star, HelpLabel, FormGroup } from "../../decorators";

const Span = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: '';
  }
`;

const RadioGroup = styled.div`
  display: flex;
`;

const Wrap = styled.label`
  margin-right: 10px;
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
      width: 18px;
      min-width: 18px;
      min-height: 18px;
      background: #ffffff;
      border: 2px solid #d4d0d0;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      vertical-align: bottom;
      &:after {
        width: 0;
        height: 0;
        background: #0085bf;
        border-radius: 50%;
        transition: width 0.3s ease-in, height 0.3s ease-in;
      }
    }
    &:checked {
      & + ${Span} {
        border: 2px solid #0085bf;
        &:after {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
`;


{/* <Radio key={option.value} value={option.value}>{option.label}</Radio> */}
const Radio = ({
  label,
  className,
  required,
  error,
  value,
  options,
  defaultValue,
  ...props
}) => {
  return (
    <FormGroup {...props} validation={error}>
      {label && (
        <Label>
          {label}
          {required && <Star />}
        </Label>
      )}
      <RadioGroup>
        {options &&
          options.map(option => {
            return (
              <Wrap className={className} key={option.value}>
                <input
                  type="radio"
                  {...props}
                  value={option.value}
                  checked={option.value === value}
                />
                <Span />
                {option.label}
              </Wrap>
            );
          })}
      </RadioGroup>
      {error && <HelpLabel>{error.errorMessage}</HelpLabel>}
    </FormGroup>
  );
};

export default Radio;
