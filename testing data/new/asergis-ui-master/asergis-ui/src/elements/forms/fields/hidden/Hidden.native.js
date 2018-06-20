import React from 'react';
import { render } from 'react-dom';
import { Input } from 'native-base';

const HiddenView = (props) => {
	const { type, error, data, ...attr } = props;
	return <Input type="hidden" {...attr} />;
};

export default HiddenView;
