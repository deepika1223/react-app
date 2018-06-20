import React from 'react';
import { View, Text } from 'react-native';

const ButtonView = (props) => {
  const { title, children, ...attr } = props;
  return (
    <Button title={title} {...attr} />
  )
}

export default ButtonView;