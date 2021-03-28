import { combineReducers } from 'redux';
import { countries } from './dataCountryReducers';
import { auth } from './auth';
import { controlers } from './controlersReducers';

export const combine = () =>
  combineReducers({
    countries,
    auth,
    controlers,
  });
