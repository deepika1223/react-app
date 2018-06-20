import React from 'react';
import PropTypes from 'prop-types';
import RadioView from './Radio';

const Radio = (props) => {
	const { methods: { setValidationRules, onChange }, ...attr } = props;
	const id = `id-${attr['name']}`;
	setValidationRules && setValidationRules(attr);

	return <RadioView id={id} onChange={onChange} {...attr} />;
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  className: PropTypes.string,
  options: PropTypes.array
};

Radio.defaultProps = {
  className: '',
  options: []
};

export default Radio;
