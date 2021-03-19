import axios from 'axios';

import {
  changeErrorLogin,
  changeErrorRegistration,
  setUser,
} from '../reducers/auth';
import { ChangeModalAuth } from './controlersAction';
const baseUrl = 'https://servertravel.herokuapp.com';
interface Iregistration {
  email: string;
  password: string;
  name: string;
  imeg: string | unknown;
}
export const registration = ({
  email,
  password,
  name,
  imeg,
}: Iregistration) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/registration`, {
        email,
        password,
        name,
        imeg,
      });
      alert(response.data.message);
      dispatch(ChangeModalAuth());
    } catch (e) {
      dispatch(changeErrorRegistration(e.response.data.message));
    }
  };
};

export const auth = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`${baseUrl}/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      localStorage.setItem('token', response.data.token);
      dispatch(setUser(response.data.user));
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};
interface Ilogin {
  email: string;
  password: string;
}
export const login = ({ email, password }: Ilogin) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      dispatch(setUser(response.data.user));
      dispatch(ChangeModalAuth());
    } catch (e) {
      dispatch(changeErrorLogin(true));
    }
  };
};
