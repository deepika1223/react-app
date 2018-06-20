'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPureLifecycle = require('react-pure-lifecycle');

var _reactPureLifecycle2 = _interopRequireDefault(_reactPureLifecycle);

var _reactEasyState = require('react-easy-state');

var _Dropdown = require('./Dropdown');

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMethods = {
  componentDidMount: function componentDidMount() {}
};

var dropDownStore = (0, _reactEasyState.store)({
  'button': {
    isOpened: false
  },
  'icon-image': {
    isOpened: false
  }
});

var Dropdown = function Dropdown(props) {
  //console.log('props in Dropdown Container', props)
  var value = props.value,
      onChange = props.onChange,
      type = props.type;

  var _ref = (dropDownStore || {})[type] || {},
      isOpened = _ref.isOpened;

  var methods = {
    onChangeState: function onChangeState(isOpened) {
      dropDownStore[type].isOpened = isOpened;
    },
    onChangeItem: function onChangeItem(itemId) {
      onChange(itemId, type);
      methods.onChangeState(false);
    },
    handleHover: function handleHover(item) {},
    renderListItems: function renderListItems() {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return list.map(function (item, i) {
        return _react2.default.createElement(
          'li',
          {
            key: item.id,
            onClick: function onClick() {
              return methods.onChangeItem(item.id);
            },
            className: item.id === value ? 'active' : null
            //onMouseOver={() => handleHover(item)}
          },
          item.icon && _react2.default.createElement(_icons2.default, { icon: item.icon }),
          _react2.default.createElement(
            'span',
            { value: item.id },
            item.label
          )
        );
      });
    }
  };
  return _react2.default.createElement(_Dropdown.Dropdown, (0, _extends3.default)({ isOpened: isOpened }, props, methods));
};

exports.default = (0, _reactEasyState.view)(Dropdown);