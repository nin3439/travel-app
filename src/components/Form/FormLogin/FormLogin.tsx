import React from 'react';
import { Form } from 'formik';
import { FormikControl } from '../FormikUtils/FormikControl';
import { useStyles } from './materialUIStyles';
import { Button } from '@material-ui/core';
export const FormLogin: React.FC<any> = ({ formik }) => {
  const classMaterial: any = useStyles();

  return (
    <Form className={classMaterial.form}>
      <h2 className={classMaterial.title}>Sing In</h2>
      <FormikControl
        placeholder="username"
        control="input"
        type="email"
        name="email"
        className={classMaterial.input}
      />
      <FormikControl
        placeholder="password"
        control="input"
        type="password"
        name="password"
        className={classMaterial.input}
      />

      <Button
        className={classMaterial.button}
        type="submit"
        disabled={!formik.isValid}
      >
        Submit
      </Button>
    </Form>
  );
};
