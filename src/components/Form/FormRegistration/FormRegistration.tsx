import React from 'react';
import { Form } from 'formik';
import { FormikControl } from '../FormikUtils/FormikControl';
import { useStyles } from './materialUIStyles';
export const FormRegistration: React.FC<any> = ({ formik, uploadImeg }) => {
  const classMaterial: any = useStyles();

  return (
    <Form className={classMaterial.form}>
      <FormikControl
        control="input"
        type="text"
        label="Name"
        name="name"
        className={classMaterial.input}
      />
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
      <FormikControl
        control="input"
        type="password"
        label="Confirm Password"
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

      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </Form>
  );
};
