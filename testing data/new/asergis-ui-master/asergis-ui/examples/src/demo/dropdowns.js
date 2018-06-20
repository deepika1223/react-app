import React, { Fragment } from 'react';
import styled from 'styled-components';
import { view, store } from 'react-easy-state';
import { View } from 'react-native';
import { Dropdown, Svg } from '../../../src';

const DemoBlock = styled(View)`
  display: inline-block;
  padding: 10px;
`;

const  services = [{
  label: 'Dashboard',
  id: 'dashboard',
  defaultMenuItem: '',
  to: '/',
  icon: 'my_services'
},{
  label: 'Audio Conference',
  id: 'ac',
  defaultMenuItem: 'confMng',
  to: '/audio-conferences/ac-management/list',
  icon: 'servicemanagement_icon'
},{
  label: 'Video Conference',
  id: 'vc',
  defaultMenuItem: 'confMng',
  to: '/video-conferences/list',
  icon: 'my_services'
},{
  label: 'Contact Management',
  id: 'cm',
  defaultMenuItem: 'contactList',
  to: '/contact-management/list',
  icon: 'servicemanagement_icon'
}]

const userMenuList = [
  {
    id: '1',
    label: 'label'
  },
  {
    id: '2',
    label: 'Logout'
  }
];

const dropDownStore = store({
  button: {
    selected: 'dashboard'
  },
  'icon-image': {
    selected: 1
  }
})

const Dropdowns = () => {

  const methods = {
    onChangeItem(value, type){
      dropDownStore[type].selected = value
    }
  }
  return (
    <Fragment>
      <DemoBlock>
        <h3>Dropdown with type=button</h3>
        <Dropdown
          value={dropDownStore.button.selected}
          list={services}
          onChange={methods.onChangeItem}
          align={'left'}
          type={'button'}
          tabindex="0"
        />
        <h3>Dropdown with type=icon-image</h3>
        <Dropdown
          list={[]}
          selected={true}
          img={'/public/images/alex-parker.png'}
          icon={<Svg icon="down-arrow"/>}
          align={'right'}
          type={'icon-image'}
          tabindex="0"
          list={userMenuList}
          onChange={methods.onChangeItem}
        />
      </DemoBlock>
    </Fragment>
  )
}

export default view(Dropdowns)