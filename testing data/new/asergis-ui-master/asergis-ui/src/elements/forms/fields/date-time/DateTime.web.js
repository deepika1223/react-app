import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DateTimePicker from 'react-datetime';
import Svg from '../../../icons';
import { FormControl, Label, Star, HelpLabel, FormGroup } from '../../decorators';

const DateTime = styled(DateTimePicker)`
  position: relative;
  font-size: 12px;
  color: #b3b3b3;
  .cross {
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
  ${FormControl} {
    &:focus {
      & + svg {
        color: #0085bf;
      }
    }
    &:hover,
    &:focus {
      & ~ .cross {
        opacity: 1;
      }
    }
  }

  .rdtPicker {
    max-height: 0;
    position: absolute;
    width: 100%;
    min-width: 260px;
    max-width: 400px;
    margin-top: 10px;
    z-index: 99999 !important;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 2px solid #d9d9d9;
    border-radius: 5px;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s;
  }
  &.rdtOpen .rdtPicker {
    max-height: 400px;
    opacity: 1;
  }
  .rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }

  .rdtPicker .rdtTimeToggle {
    text-align: center;
  }

  .rdtPicker table {
    width: 100%;
    margin: 0;
  }
  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 40px;
  }
  .rdtPicker td {
    cursor: pointer;
  }
  .rdtPicker td.rdtDay:hover,
  .rdtPicker td.rdtHour:hover,
  .rdtPicker td.rdtMinute:hover,
  .rdtPicker td.rdtSecond:hover,
  .rdtPicker .rdtTimeToggle:hover {
    background: #eeeeee;
    cursor: pointer;
  }
  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    opacity: 0.3;
  }
  .rdtPicker td.rdtToday {
    position: relative;
    background: #428bca;
    color: #fff;
    &:hover {
      color: #333;
    }
  }
  .rdtPicker td.rdtToday:before {
    content: '';
    display: inline-block;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #fff;
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #428bca;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }

  .rdtPicker td span.rdtOld {
    color: #999999;
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker th {
    border-bottom: 1px solid #f9f9f9;
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
    height: 45px;
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 21px;
    vertical-align: top;
  }

  .rdtPrev span,
  .rdtNext span {
    display: block;
    user-select: none;
  }

  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
    height: 60px;
    vertical-align: middle;
  }
  .rdtPicker thead tr:first-child th:hover {
    background: #eeeeee;
  }

  .rdtPicker tfoot {
    border-top: 1px solid #f9f9f9;
  }

  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background-color: #eee;
  }

  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }

  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: #eee;
  }

  .rdtCounters {
    display: flex;
  }

  .rdtCounter {
    height: 100px;
  }

  .rdtCounter {
    width: 100%;
  }

  .rdtCounterSeparator {
    line-height: 100px;
  }

  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: #eee;
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }

  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }

  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }

  .rdtTime td {
    cursor: default;
  }
`;
const Icon = styled.button`
  position: absolute;
  background: #fff;
  color: #354052;
  border-radius: 50%;
  right: 12px;
  top: 12px;
  width: 25px;
  height: 25px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  border: 0;
  outline: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
`;

const renderInput = (props, icon, placeholder, onChange) => {
  const clear = () => {
    props.onChange({target: { attributes: props, name: props.name, value: ''}});
  }

  return (
    <div>
      <FormControl {...props} placeholder={placeholder} />
      {icon && <Svg icon={icon} />}

      {props.value && (
        <Icon className="cross" onClick={clear}>
          X
        </Icon>
      )}
    </div>
  );
}


const DateTimeView = (props) => {
  const {
    type,
    icon,
    name,
    label,
    error,
    required,
    onChange,
    timeFormat,
    dateFormat,
    placeholder,
    ...attr
  } = props;

  return (
    <FormGroup {...props} validation={error} required={null}>
      {label && (
        <Label>
          {label}
          {required && <Star />}
        </Label>
      )}
      
      <DateTime
        {...attr}
        name={name}
        renderInput={props => renderInput(props, icon, placeholder)}
        onChange={value => onChange({target: { attributes: attr, name, value: value.toString()}})}
        closeOnSelect
        dateFormat={type==='date' && dateFormat}
        timeFormat={type==='time' && timeFormat}
      />
    </FormGroup>
    
  );
};

export default DateTimeView;
