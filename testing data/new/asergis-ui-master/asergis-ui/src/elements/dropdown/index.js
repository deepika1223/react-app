import React from 'react';
import PropTypes from 'prop-types';
import lifecycle from 'react-pure-lifecycle';
import { view, store } from 'react-easy-state';
import { Dropdown as DropdownView } from './Dropdown';
import Svg from '../icons';

const DropdownMethods = {
  componentDidMount() {
  }
}

const dropDownStore = store({
  'button': {
    isOpened: false
  },
  'icon-image': {
    isOpened: false
  }
})

const Dropdown = (props) => {
  //console.log('props in Dropdown Container', props)
  const { value, onChange, type } = props
  const { isOpened } = (dropDownStore || {})[type] || {};

  const methods = {
    onChangeState(isOpened) {
      dropDownStore[type].isOpened = isOpened
    },
    onChangeItem(itemId) {
      onChange(itemId, type)
      methods.onChangeState(false)
    },
    handleHover(item) {

    },
    renderListItems(list = []) {
      return list.map((item, i) =>
        (
          <li
            key={item.id}
            onClick={() => methods.onChangeItem(item.id)}
            className={item.id === value ? 'active' : null}
            //onMouseOver={() => handleHover(item)}
          >
            {item.icon && <Svg icon={item.icon} />}
            <span value={item.id}>{item.label}</span>
          </li>
        )
      )
    }
  }
   return <DropdownView isOpened={isOpened} {...props} {...methods}/>
}

export default view(Dropdown)