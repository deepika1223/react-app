'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.DropdownWrap = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  width: 100%;\n  display: inline-flex;\n  vertical-align: middle;\n  & > .icon-drop {\n    &:focus {\n      outline: 0 none;\n    }\n  }\n  & .btn {\n    display: flex;\n    cursor: pointer;\n    font-weight: 400;\n    text-align: left;\n    white-space: nowrap;\n    vertical-align: middle;\n    user-select: none;\n    padding: 0px 10px;\n    font-size: 14px;\n    height: 48px;\n    border-radius: 5px;\n    width: 100%;\n    overflow: hidden;\n    line-height: 1.5;\n    color: #999;\n    background-color: #fff;\n    border: 2px solid #d9d9d9;\n    align-items: center;\n    justify-content: space-between;\n    &:focus {\n      border: 2px solid #0085bf;\n      outline: none;\n    }\n    &.dropdown-toggle {\n      &:after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: 0.255em;\n        vertical-align: 0.255em;\n        content: \'\';\n        border-top: 0.3em solid;\n        border-right: 0.3em solid transparent;\n        border-bottom: 0;\n        border-left: 0.3em solid transparent;\n      }\n    }\n    &:not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:last-child):not(.dropdown-toggle) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  & > ul {\n    position: absolute;\n    width: 100%;\n    z-index: 2;\n    cursor: pointer;\n    background: white;\n    list-style: none;\n    padding: 10px 20px;\n    margin: 0;\n    top: calc(100% + 10px);\n    border: solid 2px #d9d9d9;\n    border-radius: 5px;\n    ', ' ', ' & > li {\n      margin: 0 -1px;\n      font-size: 14px;\n      color: #666;\n      font-weight: 400;\n      border-top: none;\n      /* padding: 10px 20px; */\n      ', ' text-align: left;\n      &.active,\n      &:hover {\n        color: #fff;\n        background: #0085bf;\n        border-color: #0085bf;\n      }\n      & > span {\n      }\n      & > i {\n        color: #ddd;\n      }\n    }\n  }\n'], ['\n  position: relative;\n  width: 100%;\n  display: inline-flex;\n  vertical-align: middle;\n  & > .icon-drop {\n    &:focus {\n      outline: 0 none;\n    }\n  }\n  & .btn {\n    display: flex;\n    cursor: pointer;\n    font-weight: 400;\n    text-align: left;\n    white-space: nowrap;\n    vertical-align: middle;\n    user-select: none;\n    padding: 0px 10px;\n    font-size: 14px;\n    height: 48px;\n    border-radius: 5px;\n    width: 100%;\n    overflow: hidden;\n    line-height: 1.5;\n    color: #999;\n    background-color: #fff;\n    border: 2px solid #d9d9d9;\n    align-items: center;\n    justify-content: space-between;\n    &:focus {\n      border: 2px solid #0085bf;\n      outline: none;\n    }\n    &.dropdown-toggle {\n      &:after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: 0.255em;\n        vertical-align: 0.255em;\n        content: \'\';\n        border-top: 0.3em solid;\n        border-right: 0.3em solid transparent;\n        border-bottom: 0;\n        border-left: 0.3em solid transparent;\n      }\n    }\n    &:not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:last-child):not(.dropdown-toggle) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  & > ul {\n    position: absolute;\n    width: 100%;\n    z-index: 2;\n    cursor: pointer;\n    background: white;\n    list-style: none;\n    padding: 10px 20px;\n    margin: 0;\n    top: calc(100% + 10px);\n    border: solid 2px #d9d9d9;\n    border-radius: 5px;\n    ', ' ', ' & > li {\n      margin: 0 -1px;\n      font-size: 14px;\n      color: #666;\n      font-weight: 400;\n      border-top: none;\n      /* padding: 10px 20px; */\n      ', ' text-align: left;\n      &.active,\n      &:hover {\n        color: #fff;\n        background: #0085bf;\n        border-color: #0085bf;\n      }\n      & > span {\n      }\n      & > i {\n        color: #ddd;\n      }\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n        padding: 0;\n      '], ['\n        padding: 0;\n      ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n          left: 0;\n        '], ['\n          left: 0;\n        ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n          right: 0;\n        '], ['\n          right: 0;\n        ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n          padding: 10px 20px;\n        '], ['\n          padding: 10px 20px;\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _box = require('../box');

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownWrap = exports.DropdownWrap = _styledComponents2.default.div(_templateObject, function (_ref) {
  var multiselect = _ref.multiselect;

  return (0, _styledComponents.css)(_templateObject2);
}, function (_ref2) {
  var align = _ref2.align;

  if (align === 'left') {
    return (0, _styledComponents.css)(_templateObject3);
  } else if (align === 'right') {
    return (0, _styledComponents.css)(_templateObject4);
  } else {
    return (0, _styledComponents.css)(_templateObject3);
  }
}, function (_ref3) {
  var multiselect = _ref3.multiselect;

  return (0, _styledComponents.css)(_templateObject5);
});

var Dropdown = exports.Dropdown = function Dropdown(props) {
  //
  //console.log('props in Dropdown', props)

  var list = props.list,
      value = props.value,
      defaultValue = props.defaultValue,
      type = props.type,
      align = props.align,
      split = props.split,
      multiselect = props.multiselect,
      onChangeState = props.onChangeState,
      renderListItems = props.renderListItems,
      isOpened = props.isOpened,
      icon = props.icon,
      img = props.img;

  var activeItem = list.find(function (item) {
    return item.id === value;
  });

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

  return _react2.default.createElement(
    DropdownWrap,
    {
      onChangeState: onChangeState,
      renderListItems: renderListItems,
      isOpened: isOpened,
      align: align },
    _react2.default.createElement(
      _react.Fragment,
      null,
      type === 'button' ? _react2.default.createElement(
        'button',
        {
          className: 'btn btn-danger dropdown-toggle',
          onClick: function onClick() {
            return onChangeState(!isOpened, type);
          },
          type: 'button'
          //onKeyDown={e => this.handleKeyDown(e)}
        },
        activeItem && activeItem.label || defaultValue
      ) : type === 'icon-image' ? _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement('img', { src: img, alt: 'sss' }),
        _react2.default.createElement(
          _box2.default,
          {
            is: 'span',
            tabIndex: '1',
            onClick: function onClick() {
              return onChangeState(!isOpened, type);
            }
            //onKeyDown={e => this.handleKeyDown(e)}
            , className: 'icon-drop',
            css: 'display:flex;align-items: center;margin-left: 5px;cursor:pointer'
          },
          icon
        )
      ) : _react2.default.createElement(
        'span',
        {
          tabIndex: '1',
          onClick: function onClick() {
            return onChangeState(!isOpened, type);
          }
          //onKeyDown={e => this.handleKeyDown(e)}
        },
        value
      )
    ),
    isOpened && _react2.default.createElement(
      'ul',
      { id: 'dropdown' },
      renderListItems([{ id: undefined, label: defaultValue }].concat((0, _toConsumableArray3.default)(list)))
    )
  );
};