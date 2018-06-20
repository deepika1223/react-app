import React from 'react';
import PropTypes from 'prop-types';
import SwitchView from './Switch';

const Switch = (props) => {
  const { methods: { setValidationRules, onChange }, ...attr } = props;
  const id = `id-${attr['name']}`;
  setValidationRules && setValidationRules(attr);

  return (
    <SwitchView id={id} onChange={onChange} {...attr}/>
  )
}

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Switch.defaultProps = {
  className: '',
};

export default Switch;
