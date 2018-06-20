import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Svg from '../icons';

const ToolTipText = styled.div`
  visibility: hidden;
  position: absolute;
  max-width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: 30px;
    `} ${({ whiteSpace }) => {
    whiteSpace
      ? css`
          white-space: normal;
          `
      : css`
          white-space: nowrap;
        `;
  }} font-size: 12px;

  &:after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }
`;

const ToolTipWrap = styled.div`
  position: relative;
  display: inline-block;
  color: #555;
  ${({ placement }) => {
  if (placement === 'top') {
    return css`
        ${ToolTipText} {
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          &:after {
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: #555 transparent transparent transparent;
          }
        }
      `;
  } else if (placement === 'right') {
    return css`
        ${ToolTipText} {
          top: -5px;
          left: 125%;
          &:after {
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-color: transparent #555 transparent transparent;
          }
        }
      `;
  } else if (placement === 'left') {
    return css`
        ${ToolTipText} {
          top: -5px;
          bottom: auto;
          right: 128%;

          &:after {
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-color: transparent transparent transparent #555;
          }
        }
      `;
  } else if (placement === 'bottom') {
    return css`
        ${ToolTipText} {
          top: 135%;
          left: 50%;
          margin-left: -60px;
          &:after {
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: transparent transparent #555 transparent;
          }
        }
      `;
  }
}} &:hover {
    ${ToolTipText} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ToolTip = ({
  text,
  placement,
  width,
  whiteSpace,
  maxWidth,
  children,
  lineHeight,
  ...props
  }) => (
  <ToolTipWrap placement={placement} {...props}>
    {children}
    <ToolTipText
      style={{ width: width, maxWidth: maxWidth }}
      lineHeight={lineHeight}
      whiteSpace={whiteSpace}
    >
      {text}
    </ToolTipText>
  </ToolTipWrap>
);

ToolTip.defaultProps = {
  placement: 'top',
};
ToolTip.propTypes = {
  placement: PropTypes.string,
  text: PropTypes.isRequired,
  children: PropTypes.node.isRequired,
};

const ToolTipToolWrap = styled.div`
   width: 182px;
  min-height: 172px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #6f6f70;
  position: absolute;
  left: 63px;
  top: -56px;
  z-index:2;
  &:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #ffffff;
    border-width: 15px;
    margin-top: -16px;
  }
  &:before{
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(111, 111, 112, 0);
    border-right-color: #6f6f70;
    border-width: 16px;
    margin-top: -16px;
  }
  }
  .titleBox {
    color: #ffffff;
    background: #00658a;
    display: flex;
    align-items: center;
    min-height: 50px;
    div:first-child {
      font-size: 32px;
      width: 62px;
      text-align: center;
    }
    div:last-child {
      width: auto;
      font-size: 12px;
    }
  }
  .innerContainer {
    padding: 15px;
    min-height: 96px;
    p {
      font-size: 13px;
      text-align: left;
      color: #272727;
    }
  }
  .learnMore {
    color:#0084ba;
    font-size: 14px;
    padding: 0;
    margin-right: 15px;
    display: inline-block;
    float: right;
    font-weight: bold;
  }
`;

export const ToolTipToolsPanel = ({
  placement,
  icon,
  heading,
  text,
  button,
  children,
  toLink,
  }) => {
  return (
    <div>
      {children}
      <ToolTipToolWrap>
        <div className="titleBox">
          <div>
            <Svg icon={icon} />
          </div>
          <div>{heading}</div>
        </div>
        <div className="innerContainer">
          <p>{text}</p>
        </div>
        <Link className="learnMore" to={toLink}>
          Learn More
        </Link>
      </ToolTipToolWrap>
    </div>
  );
};

