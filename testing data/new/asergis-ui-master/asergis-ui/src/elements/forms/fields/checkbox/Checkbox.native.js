import React from 'react';
import { render } from 'react-dom';
import { Content, CheckBox, Text, Body } from 'native-base';

const CheckboxView = (props) => {
  const { id, label, error, data, ...attr } = props;

  //TODO: show red invalid message
  return (
    <Content>
      <CheckBox 
        color={error ? 'red' : 'blue'}
        checked={!!value} 
        {...attr}
      />
      <Body>
        <Text>{label}</Text>
      </Body>
      {error && <Text>{error.errorMessage}</Text>}
    </Content>
  )
}

export default CheckboxView;