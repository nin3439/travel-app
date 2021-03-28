import React from 'react';
import { Form } from 'formik';
import { FormikControl } from '../FormikUtils/FormikControl';
import { useStyles } from './materialUIStyles';
import { Button } from '@material-ui/core';
import appInterfaces from '../../../constants/AppInterfaces';

export const FormRegistration: React.FC<any> = ({
  formik,
  uploadImeg,
  selectLanguage,
}) => {
  const classMaterial: any = useStyles();

  return (
    <Form className={classMaterial.form}>
      <h2>{appInterfaces[selectLanguage].signUp} </h2>
      <FormikControl
        placeholder={appInterfaces[selectLanguage].username}
        control="input"
        type="text"
        name="name"
        className={classMaterial.input}
      />
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
      <FormikControl
        placeholder={appInterfaces[selectLanguage].confirmPassword}
        control="input"
        type="password"
        name="confirmPassword"
        className={classMaterial.input}
      />
      <div className={classMaterial.inputFile}>
        <label>{appInterfaces[selectLanguage].photo}</label>
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
        {appInterfaces[selectLanguage].signUpBtn}
      </Button>
    </Form>
  );
};
