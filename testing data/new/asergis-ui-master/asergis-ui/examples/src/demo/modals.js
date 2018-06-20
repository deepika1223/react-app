import React, { Fragment } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Modal, Button, modalMethods } from "../../../src";

const DemoBlock = styled(View)`
  display: block;
  width: 400px;
  padding: 10px;
`;

const modalButtons = [
  {
    name: 'Ok', 
    primary: true,
    action() {
      console.log('Test action');
      //Hide modal after action
      modalMethods.toggleModal('demoModal', false);
    }
  }
]

const openModal = () => {
  modalMethods.toggleModal('demoModal', true);
};

export default () => (
  <Fragment>
    <DemoBlock>
      <Button onClick={openModal}>Open modal</Button>
      <Modal name="demoModal" title="Modal title" buttons={modalButtons}>Modal body</Modal>
    </DemoBlock>
  </Fragment>
);
