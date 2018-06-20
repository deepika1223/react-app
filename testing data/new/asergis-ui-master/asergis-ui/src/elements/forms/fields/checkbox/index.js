import React from 'react';
import PropTypes from 'prop-types';
import CheckboxView from './Checkbox';

const Checkbox = (props) => {
  const { methods: { setValidationRules, onChange } = {}, ...attr } = props;
  const id = `id-${attr['name']}`;

  setValidationRules && setValidationRules(attr);

  return (
    <CheckboxView id={id} onChange={onChange} {...attr}/>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;