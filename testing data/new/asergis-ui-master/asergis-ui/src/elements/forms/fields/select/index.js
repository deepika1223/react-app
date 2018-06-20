import React from 'react';
import PropTypes from 'prop-types';
import SelectView from './Select';

const Select = (props) => {
	const { methods: { setValidationRules, onChange } = {}, ...attr } = props;
  const id = `id-${attr['name']}`;

	setValidationRules && setValidationRules(attr);

	return <SelectView id={id} onChange={onChange} {...attr}/>;
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
  options: PropTypes.array
};

Select.defaultProps = {
  type: 'button',
  options: []
};

export default Select;
