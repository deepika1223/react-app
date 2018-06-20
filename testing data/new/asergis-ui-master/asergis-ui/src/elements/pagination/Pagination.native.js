import React from "react";
import { View, Text } from "react-native";

const Pagination = props => {
  const { title, children, ...attr } = props;
  return (
    <View>
      <Text>Pagination</Text>
    </View>
  );
};

export default Pagination;
