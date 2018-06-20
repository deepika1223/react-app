import React from 'react';
import { render } from 'react-dom';
import { Form } from 'native-base';

const FormView = (props) => {
  const { handleSubmit, fieldsWithProps, children, name } = props;

  return (
    <Form onSubmit={handleSubmit} id={name} noValidate>
      {children}
    </Form>
  )
}

export default FormView;