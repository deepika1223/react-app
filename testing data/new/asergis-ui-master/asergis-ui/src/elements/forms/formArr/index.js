import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import lifecycle from 'react-pure-lifecycle';
import { Label } from '../decorators';

const FormArr = (props) => {
  const { methods: { onChange } = {}, name, count=1, label, children, ...attr } = props;

  let arr=[]
  for(let i=1; i <= count; i++){
    arr.push(
      <Fragment>
        <div>
          <Label>{`${label} ${i}`}</Label>
          {
            React.Children.map(children, child =>
            React.cloneElement(child, {arr: name, index: i-1}))
          }
        </div>
      </Fragment>
    )
  }
  return arr
}

FormArr.defaultProps = {
  name: 'text'
};

export default FormArr


