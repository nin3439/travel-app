import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../redux/actions/actionAuth';
import { Main } from './Main';

const MainContainer = (props: any) => {
  return (
    <>
      <Main {...props} />
    </>
  );
};

interface Iauth {
  currentUser: {};
  isAuth: boolean;
  isErrorLogin: boolean;
  isErrorRegistration: string;
}
interface Icountries {
  countries: [];
}
interface Istate {
  controlers: { isModalActive: boolean };
  auth: Iauth;
  countries: Icountries;
}
interface ImapStateReturn {
  isModalActive: boolean;
}
const mapStateToProps = (state: Istate): ImapStateReturn => {
  return {
    isModalActive: state.controlers.isModalActive,
  };
};

export default connect(mapStateToProps, { auth })(MainContainer);
