import React from 'react';
import PropTypes from 'prop-types';
import lifecycle from 'react-pure-lifecycle';
import { view } from "react-easy-state";
import { store } from "../../lib";
import ModalView from './Modal';
import globalMethods from './methods';

const ModalMethods = {
  componentDidMount({ name }) {
    store.modals[name] = {
      show: false
    };
  }
};

const Modal = (props) => {
  const { name, modal, children, mutate, onToggle } = props;
  const { show } = store.modals[name] || {};
  const methods = {
    toggle(show) {
      globalMethods.toggleModal(name, !show);
    },
  };

  return <ModalView show={show} {...props} {...methods}/>;
};

Modal.propTypes = {
  name: PropTypes.string.isRequired
};

export default lifecycle(ModalMethods)(view(Modal));
