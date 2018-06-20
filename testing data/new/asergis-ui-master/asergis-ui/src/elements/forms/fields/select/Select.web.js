import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import ReactSelect from "react-select";
import { Label, Star, HelpLabel, FormGroup } from "../../decorators";
import Svg from "../../../icons";
import Box from "../../../box";

//Select classes https://github.com/JedWatson/react-select/tree/master/scss
const Select = styled(ReactSelect)`
  &.Select  {
    /* position: relative; */
    .Select-control {
      display: flex;
      border: 2px solid #d9d9d9; //#0085bf
      border-radius: 5px;
      padding: 12px 10px 10px;
      color: #555;
      /* font-size: 14px; */

      .Select-multi-value-wrapper {
        flex-grow: 1;
      }
    }
    .Select-arrow-zone {
      cursor: pointer;
      position: relative;
      text-align: center;
      vertical-align: middle;
      width: 30px; 
      padding-top: 7px;
      .Select--rtl & {
        padding-right: 0;
        padding-left: 14px;  //
      }
      .Select-arrow {
        border-color: #d9d9d9 transparent transparent;
        border-style: solid;
        border-width: 7px 7px 7px; //
        display: inline-block;
      }
    }

    .Select-clear-zone {
      cursor: pointer;
      position: relative;
      text-align: center;
      vertical-align: middle;
      width: 20px; 
      &:hover {
        color: black;
      }
    }
    .Select-clear {
      display: inline-block;
      color: #d9d9d9;
      content: "x";
      font-size: 18px;
      line-height: 1;
    }
    .Select-input {
      opacity: 0;
      height: 0;
      position: absolute;
      left: -1000;
      top: -1000;
    }
    .Select-value {
      display: inline-flex;
      align-items: center;
    }	
    .Select-menu-outer {
      position: absolute;
      z-index: 10;
      min-width: 100%;
      box-sizing: border-box;
      border-radius: 3px;
      background-color: white;
      border 1px solid #d9d9d9;
      border-top: none;
      top: 100%;
      -webkit-overflow-scrolling: touch;
    }
    .Select-option {
      line-height: 1.42857143;
      box-sizing: border-box;
      background-color: white;
      cursor: pointer;
      display: block;
      padding: 5px;
      color: #555;

      &.is-selected {
       background-color: #0085bf;
       color: white;
      }

      &.is-focused {
        background-color: #d9d9d9
      }

      &.is-disabled {
        cursor: default;
      }
    }	
  }
  & .Select-placeholder {
   
  }

  &.Select.is-open {
    .Select-control {
      border-color: #0085bf;
    }
    
  }
`;

const SelectView = props => {
  const {
    id,
    label,
    name,
    required,
    value,
    arr,
    index,
    onChange,
    error,
    options = [],
    isClearable,
    isSearchable,
    ...attr
  } = props;
  return (
    <FormGroup {...props} validation={error}>
      {label && (
        <Label>
          {label}
          {required && <Star />}
        </Label>
      )}
      <Select
        isClearable={isClearable}
        isSearchable={isSearchable}
        options={options}
        value={value}
        onChange={(params) => {
          const {value} = params || {};
          onChange({ target: { attributes: {...attr, arr, index}, name, value } });
        }}
      />
      {error && <HelpLabel>{error.errorMessage}</HelpLabel>}
    </FormGroup>
  );
};

export default SelectView;
