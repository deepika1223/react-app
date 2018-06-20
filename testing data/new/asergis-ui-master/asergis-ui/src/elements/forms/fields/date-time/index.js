import React from 'react';
import PropTypes from 'prop-types';
import DateTimeView from './DateTime';

const DateTime = (props) => {
	const { value, methods: { setValidationRules, onChange } ={}, ...attr } = props;
	const id = `id-${attr['name']}`;

	setValidationRules && setValidationRules(attr);

	return <DateTimeView id={id} onChange={onChange} {...attr} />;
};


DateTime.defaultProps = {
  type: 'date',
  required: false,
};

DateTime.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  timeFormat: PropTypes.string,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
};

export default DateTime;
