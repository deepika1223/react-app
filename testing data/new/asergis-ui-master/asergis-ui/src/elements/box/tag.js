import React, { Component } from 'react';
import { fullForm } from './css';

const omit = Object.keys(fullForm).reduce((prev, next) => {
  prev.push(next);
  return prev;
}, []);

export default ({ prop = 'is' } = {}) => {
  return class Tag extends Component {
    render() {
      const { children, ...otherProps } = this.props;
      const tag = otherProps[prop];
      const omitPropsKeys = [prop, 'css', ...omit];
      const props = Object.keys(otherProps).reduce((prev, next) => {
        if (omitPropsKeys.includes(next)) {
          return prev;
        } else {
          prev[next] = otherProps[next];
          return prev;
        }
      }, {});
      return React.createElement(tag, props, children);
    }
  };
};