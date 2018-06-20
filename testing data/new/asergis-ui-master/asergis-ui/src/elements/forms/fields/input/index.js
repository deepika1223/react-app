import React from 'react';
import PropTypes from 'prop-types';
import InputView from './Input';
import lifecycle from 'react-pure-lifecycle';
// import { withLifecycle } from '../../../../lib';

const InputMethods = {
  componentDidMount({ name, defaultValue, group, methods: { setFieldValue } }) {
    // setFieldValue(name, defaultValue, group);
  }
};

const Input = (props) => {
	const { methods: { setValidationRules, onChange } = {}, ...attr } = props;
	const id = `id-${attr['name']}`;

	setValidationRules && setValidationRules(attr);

	return <InputView id={id} onChange={onChange} {...attr} />;
};


Input.defaultProps = {
  type: 'text',
  required: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default lifecycle(InputMethods)(Input);
