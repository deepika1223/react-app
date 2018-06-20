import styled, { css } from 'styled-components';
import { Row, Col } from '../../../';

export const FormBlock = styled(Row)`
  position: relative;
  margin: ${props => (props.withoutBorder ? "20px 0 0" : "20px 0")};
  padding-bottom: ${props => (props.withoutBorder ? "0" : "10px")};
  &:after {
    display: block;
    position: absolute;
    margin: 0 20px;
    content: "";
    border-bottom: ${props => props.withoutBorder ? "none" : "1px solid #d9d9d9"};
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const FieldWrapper = styled(Col)`
  padding: 0 20px;
  margin: 0;
`;

export const FormControl = styled.input`
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

export const FormGroup = styled.div`
  position: relative;
  font-size: 14px;
  margin-bottom: ${({ mb }) => (mb ? '0' : '20px')};
    ${({ validation }) =>
        validation &&
    css`
      color: #f13a30;
    `} svg {
    position: absolute;
    right: 15px;
    top: 16px;
    color: #b3b3b3;
    font-size: 16px;
    pointer-events: none;
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

