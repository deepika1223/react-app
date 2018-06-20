import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import Svg from '../icons';
import Box from '../box';

export const DropdownWrap = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex;
  vertical-align: middle;
  & > .icon-drop {
    &:focus {
      outline: 0 none;
    }
  }
  & .btn {
    display: flex;
    cursor: pointer;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    padding: 0px 10px;
    font-size: 14px;
    height: 48px;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    line-height: 1.5;
    color: #999;
    background-color: #fff;
    border: 2px solid #d9d9d9;
    align-items: center;
    justify-content: space-between;
    &:focus {
      border: 2px solid #0085bf;
      outline: none;
    }
    &.dropdown-toggle {
      &:after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
      }
    }
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:last-child):not(.dropdown-toggle) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  & > ul {
    position: absolute;
    width: 100%;
    z-index: 2;
    cursor: pointer;
    background: white;
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    top: calc(100% + 10px);
    border: solid 2px #d9d9d9;
    border-radius: 5px;
    ${({ multiselect }) => {
      return css`
        padding: 0;
      `;
    }} ${({ align }) => {
      if (align === 'left') {
        return css`
          left: 0;
        `;
      } else if (align === 'right') {
        return css`
          right: 0;
        `;
      } else {
        return css`
          left: 0;
        `;
      }
    }} & > li {
      margin: 0 -1px;
      font-size: 14px;
      color: #666;
      font-weight: 400;
      border-top: none;
      /* padding: 10px 20px; */
      ${({ multiselect }) => {
        return css`
          padding: 10px 20px;
        `;
      }} text-align: left;
      &.active,
      &:hover {
        color: #fff;
        background: #0085bf;
        border-color: #0085bf;
      }
      & > span {
      }
      & > i {
        color: #ddd;
      }
    }
  }
`;

export const Dropdown = (props) => {
  //
  //console.log('props in Dropdown', props)

  const {
    list,
    value,
    defaultValue,
    type,
    align,
    split,
    multiselect,
    onChangeState,
    renderListItems,
    isOpened,
    icon,
    img
    } = props
  const activeItem = list.find(item => item.id === value)

  //selectItem(e, item) {
  //  e.preventDefault();
  //
  //  if (item) {
  //    this.props.onChange(item);
  //  }
  //  if (this.props.multiselect && this.state.listVisible) {
  //    let selectedArr = this.state.selectedArr;
  //    if (selectedArr.indexOf(e.target.id) > -1) {
  //      selectedArr.splice(selectedArr.indexOf(e.target.id), 1);
  //    } else {
  //      selectedArr.push(e.target.id);
  //    }
  //
  //    this.setState({ selectedArr: selectedArr });
  //    // console.log(this.state.selectedArr);
  //    // document.addEventListener('click', this.closeDropdown);
  //  } else {
  //    this.setState(
  //      {
  //        listVisible: !this.state.listVisible,
  //      },
  //      () => {
  //        document.addEventListener('click', this.closeDropdown);
  //      }
  //    )
  //  }
  //}

  //closeDropdown(e) {
  //  if (this.dropdown) {
  //    if (!this.dropdown.contains(e.target)) {
  //      this.setState({ listVisible: false }, () => {
  //        document.removeEventListener('click', this.closeDropdown);
  //      });
  //      return true;
  //    }
  //  } else {
  //    this.setState({ listVisible: false }, () => {
  //      document.removeEventListener('click', this.closeDropdown);
  //    });
  //  }
  //}
  //componentWillUnmount() {
  //  document.removeEventListener('click', this.closeDropdown);
  //}
  //
  //handleKeyDown(e) {
  //  e.preventDefault();
  //  const { cursor } = this.state;
  //  const { list } = this.props;
  //  // arrow up/down button should select next/previous list element
  //  if (e.keyCode === 38 && cursor > 0) {
  //    this.setState(prevState => ({
  //      cursor: prevState.cursor - 1,
  //    }));
  //  } else if (e.keyCode === 40 && cursor < list.length - 1) {
  //    this.setState(prevState => ({
  //      cursor: prevState.cursor + 1,
  //    }));
  //  } else if (e.keyCode === 13) {
  //    this.selectItem(e, list[cursor]);
  //  }
  //}
  //handleHover(item) {
  //  this.setState({
  //    cursor: items.findIndex(a => a.id === item.id),
  //  });
  //}
  //
  //activeItemList(e) {
  //  console.log(e);
  //}

  return (
    <DropdownWrap
      onChangeState={onChangeState}
      renderListItems={renderListItems}
      isOpened={isOpened}
      align={align}>
      <Fragment>
        {type === 'button' ? (
          <button
            className="btn btn-danger dropdown-toggle"
            onClick={() => onChangeState(!isOpened, type)}
            type="button"
            //onKeyDown={e => this.handleKeyDown(e)}
          >
            {activeItem && activeItem.label || defaultValue }
          </button>
        ) : type === 'icon-image' ? (
          <Fragment>
            <img src={img} alt="sss" />
            <Box
              is="span"
              tabIndex={'1'}
              onClick={() => onChangeState(!isOpened, type)}
              //onKeyDown={e => this.handleKeyDown(e)}
              className="icon-drop"
              css="display:flex;align-items: center;margin-left: 5px;cursor:pointer"
            >
              {icon}
            </Box>
          </Fragment>
        ):(
          <span
            tabIndex={'1'}
            onClick={() => onChangeState(!isOpened, type)}
            //onKeyDown={e => this.handleKeyDown(e)}
          >
            {value}
          </span>
        )}
      </Fragment>
      {isOpened && <ul id="dropdown">{renderListItems([{id: undefined, label: defaultValue},...list])}</ul>}
    </DropdownWrap>
  )
}