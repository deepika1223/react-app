import React from 'react';

const withLifecycle = (methods) => {
	return (WrappedComponent) => {
    for (let methodName in methods) {
      WrappedComponent.prototype[methodName] = function(...params){
        methods[methodName](this.props, ...params);
      };
    }
    return WrappedComponent;
	};
};

export default withLifecycle;