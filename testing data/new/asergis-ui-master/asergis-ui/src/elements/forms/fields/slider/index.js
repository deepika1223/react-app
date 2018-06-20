import React from 'react';
import PropTypes from 'prop-types';
import SliderView from './Slider';

const Slider = (props) => {
	//console.log('props in slider', props)
	const { methods: { setValidationRules, onChange }, ...attr } = props
	const id = `id-${attr['name']}`;
	setValidationRules && setValidationRules(attr);

	return <SliderView id={id} onChange={onChange} {...attr} />
};

Slider.propTypes = {
	name: PropTypes.string.isRequired
};

export default Slider;
