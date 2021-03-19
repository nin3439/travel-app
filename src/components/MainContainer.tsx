import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { auth } from '../redux/actions/actionAuth';
import { loadDataCountries } from '../redux/actions/dataCountry';
import { Main } from './Main';
import preloader from '../assets/imeg/preloader.svg';
const MainContainer = (props: any) => {
  useEffect(() => {
    props.loadDataCountries();
    props.auth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {props.isLoad ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <img src={preloader} alt="Preloader" />
        </div>
      ) : (
        <Main {...props} />
      )}
    </>
  );
};

interface Iauth {
  currentUser: {};
  isAuth: boolean;
  isErrorLogin: boolean;
  isErrorRegistration: string;
}

interface Istate {
  controlers: { isModalActive: boolean };
  auth: Iauth;
  countries: { countries: {}[]; isLoad: boolean };
}
interface ImapStateReturn {
  isModalActive: boolean;
  countriesData: {}[];
  isLoad: boolean;
}
const mapStateToProps = (state: Istate): ImapStateReturn => {
  return {
    isModalActive: state.controlers.isModalActive,
    countriesData: state.countries.countries,
    isLoad: state.countries.isLoad,
  };
};

export default connect(mapStateToProps, { auth, loadDataCountries })(
  MainContainer
);
