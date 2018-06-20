import React, { Fragment } from "react";
import styled from "styled-components";
import { View } from 'react-native';

export const Preloader = (props) => {
  const { loading, children } = props;

  return (
    <Fragment>
      {loading ? (
        <Fragment>loading...</Fragment>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>

  )
};