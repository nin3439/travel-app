import axios from 'axios';
import { changeLoad, loadData } from '../reducers/dataCountryReducers';
const baseURL = 'https://servertravel.herokuapp.com/countries/';
export const loadDataCountries = () => {
  return (dispatch: any) => {
    dispatch(changeLoad());
    axios.get(`${baseURL}`).then((res) => {
      dispatch(loadData(res.data.countries));
      dispatch(changeLoad());
    });
  };
};
