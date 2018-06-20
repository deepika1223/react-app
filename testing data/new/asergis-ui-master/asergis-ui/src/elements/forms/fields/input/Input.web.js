import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Svg from '../../../icons';
import { FormControl, Label, Star, HelpLabel, FormGroup } from '../../decorators';

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

export const Textarea = FormControl.withComponent('textarea');

const Input = ({
  type,
  label,
  value,
  name,
  arr,
  index,
  onChange,
  placeholder,
  required,
  error,
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
      {type === 'search' ? (
        <Fragment>
          <SearchInput
            type="text"
            name={name}
            onChange={onChange}
            value={value}
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
          arr={arr}
          index={index}
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
