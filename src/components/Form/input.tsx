import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { TextError } from './FormikUtils/TextError';
interface Iprops {
  label: string;
  name: string;
  type: string;
  className: string;
}
export const Input: React.FC<Iprops> = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
