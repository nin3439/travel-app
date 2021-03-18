import React from 'react';
import classes from './style/textError.module.css';
export const TextError: React.FC<any> = (props) => {
  return <div className={classes.error}>{props.children}</div>;
};
