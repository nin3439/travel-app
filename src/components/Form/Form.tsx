import React, { useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Box, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { login, registration } from '../../redux/actions/actionAuth';
import { ChangeModalAuth } from '../../redux/actions/controlersAction';
import { FormLogin } from './FormLogin/FormLogin';
import { FormRegistration } from './FormRegistration/FormRegistration';
import appInterfaces from '../../constants/AppInterfaces';
import { useStyles } from './materialUIStyles';

const Form: React.FC<any> = ({
  ChangeModalAuth,
  registration,
  login,
  selectLanguage,
}) => {
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
    });
  };
  return (
    <Box
      className={`${classMaterial.overlay} ${classMaterial.active}`}
      onClick={() => {
        ChangeModalAuth();
      }}
    >
      <Box className={classMaterial.modal} onClick={(e) => e.stopPropagation()}>
        <Box className={classMaterial.close}>
          <Close
            className={classMaterial.iconClose}
            color="action"
            onClick={() => {
              ChangeModalAuth();
            }}
          />
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik: any) => {
            return (
              <>
                <div className={classMaterial.changeEvent}>
                  <Button
                    className={
                      currentEvent === 'login'
                        ? classMaterial.buttonActive
                        : classMaterial.buttonDisabled
                    }
                    onClick={() => {
                      changeEvent('login');
                    }}
                  >
                    {appInterfaces[selectLanguage].signInBtn}
                  </Button>
                  <Button
                    className={
                      currentEvent === 'registration'
                        ? classMaterial.buttonActive
                        : classMaterial.disabled
                    }
                    onClick={() => {
                      changeEvent('registration');
                    }}
                  >
                    {appInterfaces[selectLanguage].signUpBtn}
                  </Button>
                </div>

                {currentEvent === 'registration' ? (
                  <FormRegistration
                    formik={formik}
                    uploadImeg={uploadImeg}
                    selectLanguage={selectLanguage}
                  />
                ) : (
                  <FormLogin formik={formik} selectLanguage={selectLanguage} />
                )}
              </>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};
const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps, {
  ChangeModalAuth,
  registration,
  login,
})(Form);
