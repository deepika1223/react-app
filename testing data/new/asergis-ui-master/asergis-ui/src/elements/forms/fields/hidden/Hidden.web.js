import React from 'react';

const HiddenView = (props) => {
	const { type, label, error, data, ...attr } = props;
	return <input type="hidden" {...attr} />;
};

export default HiddenView;
