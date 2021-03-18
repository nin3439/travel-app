import React from 'react';
import { Form } from 'formik';
import { FormikControl } from '../FormikUtils/FormikControl';
import { useStyles } from './materialUIStyles';
export const FormLogin: React.FC<any> = ({ formik }) => {
  const classMaterial: any = useStyles();

  return (
    <Form className={classMaterial.form}>
      <FormikControl
        placeholder="username"
        control="input"
        type="email"
        label="Email"
        name="email"
        className={classMaterial.input}
      />
      <FormikControl
        control="input"
        type="password"
        label="Password"
        name="password"
        className={classMaterial.input}
      />
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </Form>
  );
};
