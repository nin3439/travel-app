import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { TextError } from './TextError';
import classes from './style/input.module.css';
interface Iprops {
  placeholder?: string;
  name: string;
  type: string;
  className: string;
}
export const Input: React.FC<Iprops> = (props) => {
  const { name, ...rest } = props;
  return (
    <div className={classes.formControl}>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
