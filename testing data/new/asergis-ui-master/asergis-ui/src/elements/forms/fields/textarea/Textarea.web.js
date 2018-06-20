import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Svg from '../../../icons';

export const FormControl = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  &:focus {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    border: 2px solid #0085bf;
    outline: 0;
  }
  ${({ validation }) =>
  validation &&
  css`
      border-color: #f13a30;
    `};
  ::placeholder {
    color: #b3b3b3;
    font-weight: 600;
    font-size: 12px;
    opacity: 1;
  }
`;

export const SearchInput = FormControl.extend`
  background-color: #0185be;
  border-radius: 50px;
  padding: 10px 20px;
  border-color: #0185be;
  ::placeholder {
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    opacity: 1;
  }
  & + .search {
    color: #fff;
    top: 12px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 20px;
  font-size: ${props => (props.fz ? props.fz : '14px')};
  font-weight: ${props => (props.w ? props.w : '600')};
  color: #666;
  line-height: 1;
  color: ${props => (props.primary ? '#0085bf' : '#666')};
`;
export const HelpLabel = styled.p`
  font-size: 14px;
  color: #ff0000;
  font-weight: normal;
  margin-bottom: 0px;
`;

export const Star = styled.span`
  ::after {
    content: ' *';
    color: red;
    font-size: 15px;
    font-weight: 900;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  font-size: 16px;
  margin-bottom: 20px;
  ${({ validation }) =>
  validation &&
  css`
      color: #f13a30;
    `} svg {
    position: absolute;
    right: 15px;
    top: 14px;
    font-size: 20px;
    pointer-events: none;
  }
`;

const Input = (props) => {
  const {
    type,
    label,
    value,
    name,
    onChange,
    placeholder,
    required,
    error,
    ...attrs
  } = props;
  return (
    <FormGroup {...props} validation={error}>
      {label && (
        <Label>
          {label}
          {required && <Star />}
        </Label>
      )}
      {type === 'search' ? (
        <Fragment>
          <SearchInput
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            validation={error}
          />
          <Svg icon="search" className="search" />
        </Fragment>
      ) : (
        <FormControl
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          validation={error}
        />
      )}

      {error && <HelpLabel>{error.errorMessage}</HelpLabel>}
    </FormGroup>
  );
};

export default Input;
