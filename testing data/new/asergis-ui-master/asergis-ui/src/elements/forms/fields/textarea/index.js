import React from 'react';
import PropTypes from 'prop-types';
import TextareaView from './Textarea';

const Textarea = (props) => {
	const { value, methods: { setValidationRules, onChange }, ...attr } = props;
	const id = `id-${attr['name']}`;

	setValidationRules && setValidationRules(attr);

	return <TextareaView id={id} onChange={onChange} {...attr} />;
};

Textarea.propTypes = {
	name: PropTypes.string.isRequired
};

export default Textarea;
