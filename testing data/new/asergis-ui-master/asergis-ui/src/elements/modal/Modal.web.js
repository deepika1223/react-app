import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { View } from 'react-native';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Button, Body, Title, media } from "../..";

//console.log("media", Body, media);

const fadeDown = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const ModalWrap = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 15px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const ModalContent = styled.div`
  background-color: #fff;
  margin: auto;
  border: 1px solid #888;
  width: 100%;
  border-radius: ${props => (props.bdr ? props.bdr : "0px")};
  ${media.tablet`

  max-width: ${props => (props.width ? props.width : "75%")};

  `} box-shadow: 0 0 1px 2px #00000021;

  &.fade-enter {
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }
  &.fade-enter-active {
    animation-name: ${fadeDown};
  }
`;

const ModalBody = styled.div`
  padding: 15px;
`;

const ModalHeader = styled.div`
  padding: 9px 15px;
  background-color: #fff;
`;

const ModalFooter = styled.div`
  background: #fff;
  padding: 20px;
`;

const ModalView = props => {
  const {
    name,
    title,
    children,
    show,
    toggle,
    width,
    bdr,
    buttons = [],
    ...attr
  } = props;

  //TODO: add close button
  return (
    <View>
      {show && <ModalWrap name={name} {...attr}>
          <ReactCSSTransitionGroup transitionName="fade" component={Fragment} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <ModalContent width={width} bdr={bdr}>
              {title && (
                <ModalHeader>
                  <Title capitalize primary align="left">
                    {title}
                  </Title>
                </ModalHeader>  
              )}
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                {buttons.map(({ name, action, ...attr }, idx) => (
                  <Button
                    key={idx}
                    onClick={action ? action : toggle}
                    {...attr}
                  >
                    {name}
                  </Button>
                ))}
                {buttons && (
                  <Button onClick={toggle} color="secondary">
                    Cancel
                  </Button>
                )}
              </ModalFooter>
            </ModalContent>
          </ReactCSSTransitionGroup>
        </ModalWrap>}
    </View>

  )
};

export default ModalView;
