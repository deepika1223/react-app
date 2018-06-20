import React from 'react';

const FormView = (props) => {
  const { handleSubmit, fieldsWithProps, customError, children, name } = props;

  return (
    <form onSubmit={handleSubmit} id={name} noValidate>
        {customError && <p className="text-danger">{customError}</p>}
        {children}
    </form>
  )
}

export default FormView;
