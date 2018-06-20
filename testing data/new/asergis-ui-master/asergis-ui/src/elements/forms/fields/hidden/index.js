import React from 'react';
import PropTypes from 'prop-types';
import HiddenView from './Hidden';

const Hidden = (props) => {
	const { value, methods: { setValidationRules, onChange }, ...attr } = props;
	const id = `id-${attr['name']}`;

	setValidationRules && setValidationRules(attr);

	return <HiddenView id={id} onChange={onChange} {...attr} />;
};

Hidden.propTypes = {
	name: PropTypes.string.isRequired
};

export default Hidden;
