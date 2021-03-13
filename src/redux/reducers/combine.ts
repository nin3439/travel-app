import { combineReducers } from 'redux';
import { countries } from './dataCountryReducers';

export const combine = () =>
  combineReducers({
    countries,
  });
