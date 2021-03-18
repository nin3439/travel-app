import { Box } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { login, registration } from '../../redux/actions/actionAuth';
import { FormLogin } from './FormLogin/FormLogin';
import { FormRegistration } from './FormRegistration/FormRegistration';

import { useStyles } from './materialUIStyles';
const Form: React.FC<any> = ({ registration, login }) => {
  const classMaterial: any = useStyles();
  const [imeg, setImeg] = useState<string | unknown>('');
  const [currentEvent, changeEvent] = useState('login');
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(3, 'Min 3 symbol')
      .max(12, 'Max 12 symbol')
      .required('Required'),

    confirmPassword:
      currentEvent === 'registration'
        ? Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match')
            .required('Required')
        : Yup.string(),
    name:
      currentEvent === 'registration'
        ? Yup.string().required('Required')
        : Yup.string(),
  });
  interface Ivalues {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  }
  const onSubmit = (values: Ivalues) => {
    if (currentEvent === 'login') {
      login({ ...values });
    } else {
      registration({ ...values, imeg });
    }

    console.log(registration);
  };
  const uploadImeg = (e: any) => {
    const file = e.target.files[0];
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    }).then((imegUrl) => {
      setImeg(imegUrl);
      console.log(typeof imegUrl);
    });
  };
  return (
    <Box
      className={`${classMaterial.overlay} ${classMaterial.active}`}
      //   onClick={changeModalActive}
    >
      <Box className={classMaterial.modal} onClick={(e) => e.stopPropagation()}>
        <Box className={classMaterial.close}>
          <Close
            className={classMaterial.iconClose}
            color="action"
            // onClick={changeModalActive}
          />
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik: any) => {
            console.log(formik);
            // return <FormLogin formik={formik} />;
            return (
              <div>
                {currentEvent === 'registration' ? (
                  <FormRegistration formik={formik} uploadImeg={uploadImeg} />
                ) : (
                  <FormLogin formik={formik} />
                )}
                ;
              </div>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};
const mapStateToPrps = (state: any) => {
  return {};
};
export default connect(mapStateToPrps, { registration, login })(Form);
