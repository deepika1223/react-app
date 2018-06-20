import React from 'react';
import { render } from 'react-dom';
import { Content, Text, Item, Input, Icon } from 'native-base';


const SelectView = (props) => {
  const { type = 'text', id, label, error, data, ...attr } = props;

  //TODO: show red invalid message

  return (
    <Content>
      <Item floatingLabel error={!!error}>
        <Label for={id}>{label}</Label>
        <Input 
          type={type}
          id={id}
          invalid={!!error}
          {...attr}
        />
        {error && <Icon name='close-circle' />}
        
      </Item>
      {error && <Text>{error.errorMessage}</Text>}
    </Content>
  )
}

export default SelectView;