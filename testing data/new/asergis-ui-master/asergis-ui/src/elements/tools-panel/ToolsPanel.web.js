import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Svg from '../icons';
import { ToolTipToolsPanel } from '../tooltip';
import { default as Box } from '../box';

const Wrap = styled.div`
  width: 62px;
  height: calc(100% - 60px);
  position: absolute;
  left: 0;
  top: 30px;
  background: #fff;
  transition: all 0.5s ease;
  box-shadow: rgba(8, 8, 8, 0.06) 3px 2px 8px 0px;
  &.active {
    left: -64px;
    transition: all 0.5s ease;
  }
  span {
    color: #fff;
    font-size: 12px;
    background: #004564;
    display: block;
    text-align: center;
    padding: 2px 0;
  }
  .arrow {
    color: #156691;
    font-size: 25px;
    background: #ffffff;
    border: none;
    width: 26px;
    height: 74px;
    position: absolute;
    right: -26px;
    top: 71px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(8, 8, 8, 0.06) 3px 2px 8px 0px;
  }
  .arrow:focus {
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      padding: 0;
      position: relative;
      & > a {
        font-size: 28px;
        color: #166590;
        padding: 15px 0;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
      a.active {
        border-left: 4px solid #166590;
        padding-right: 4px;
      }
      & > div {
        display: none;
      }
    }
    li:hover {
      & > a {
        color: #ffffff;
        background: #166590;
      }
      & > div {
        display: block;
      }
    }
  }
`;

export const ToolsPanel = ({ clickArrow, toolBarToggle, toolsList = [] }) => (
    <Wrap className={toolBarToggle ? 'active' : ''}>
      <span>Tools</span>
      <ul>
        {
          toolsList.map(item => {
            return (
              <li key={item.id}>
                <NavLink to={ item.to }>
                  <Svg icon={ item.icon } />
                </NavLink>
                <ToolTipToolsPanel
                  icon={ item.tooltip.icon }
                  heading={ item.tooltip.heading }
                  text={ item.tooltip.text }
                  toLink={ item.tooltip.to }
                />
              </li>
            )
          })
        }
      </ul>
      <button className="arrow" onClick={clickArrow}>
        {toolBarToggle ? '»' : '«'}
      </button>
    </Wrap>
)




