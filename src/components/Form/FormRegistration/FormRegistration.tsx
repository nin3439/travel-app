import React from 'react';
import { Form } from 'formik';
import { FormikControl } from '../FormikUtils/FormikControl';
import { useStyles } from './materialUIStyles';
import { Button } from '@material-ui/core';
export const FormRegistration: React.FC<any> = ({ formik, uploadImeg }) => {
  const classMaterial: any = useStyles();

  return (
    <Form className={classMaterial.form}>
      <h2>Sign up</h2>
      <FormikControl
        placeholder="username"
        control="input"
        type="text"
        name="name"
        className={classMaterial.input}
      />
      <FormikControl
        placeholder="email"
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
      <FormikControl
        placeholder="Confirm Password"
        control="input"
        type="password"
        name="confirmPassword"
        className={classMaterial.input}
      />
      <div className={classMaterial.input}>
        <label>Загрузите фото</label>
        <input
          placeholder="Upload imeg"
          type="file"
          onChange={(e) => {
            uploadImeg(e);
          }}
        />
      </div>

      <Button
        className={classMaterial.button}
        type="submit"
        disabled={!formik.isValid}
      >
        Sign up
      </Button>
    </Form>
  );
};
