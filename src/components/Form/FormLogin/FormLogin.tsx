import React from 'react';
import { Form } from 'formik';
import { FormikControl } from '../FormikUtils/FormikControl';
import { useStyles } from './materialUIStyles';
import { Button } from '@material-ui/core';
import appInterfaces from '../../../constants/AppInterfaces';

export const FormLogin: React.FC<any> = ({ formik, selectLanguage }) => {
  const classMaterial: any = useStyles();

  return (
    <Form className={classMaterial.form}>
      <h2 className={classMaterial.title}>
        {appInterfaces[selectLanguage].signIn}{' '}
      </h2>
      <FormikControl
        placeholder={appInterfaces[selectLanguage].email}
        control="input"
        type="email"
        name="email"
        className={classMaterial.input}
      />
      <FormikControl
        placeholder={appInterfaces[selectLanguage].password}
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
        {appInterfaces[selectLanguage].submit}
      </Button>
    </Form>
  );
};
