import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Header from './Header';
import { Countries } from '../components/content/Countries';
import { Country } from '../components/content/Country/Country';
import { Footer } from './Footer';
import mockCountries from '../models/MockCountries';
import Form from './Form/Form';

<<<<<<< HEAD
export const Main: React.FC<any> = ({ isModalActive, auth }) => {
  const [selectLanguage, setselectLanguage] = React.useState('0');
  const [openForm, changeOpenForm] = useState('false');
=======
export const Main: React.FC = () => {
  const [selectLanguage, setSelectLanguage] = useState('0');
  const [isMainPageOpen, setIsMainPageOpen] = useState(true);

>>>>>>> 0ee08d20d6969dad7030e62fd6e10db345cc0227
  const countriesMainPage = mockCountries.map((country: any) => {
    return {
      country: country.name,
      name: country.localizations[selectLanguage].name,
      capital: country.localizations[selectLanguage].capital,
      imageUrl: country.imageUrl,
    };
  });

  const [countries, setCountries] = useState(countriesMainPage);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    debugger;
    auth();
  }, []);
  useEffect(() => {
    const foundCountries = countriesMainPage.filter((country: any) => {
      return (
        country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setCountries(foundCountries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, selectLanguage]);

  return (
    <Router>
      <Grid container direction="column" justify="space-between">
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectLanguage={selectLanguage}
          setSelectLanguage={setSelectLanguage}
          isMainPageOpen={isMainPageOpen}
        />
        <Grid style={{ minHeight: 'calc(100vh - 128px)' }}>
          <Switch>
            <Route exact path="/">
              <Countries
                countries={countries}
                setIsMainPageOpen={setIsMainPageOpen}
              />
            </Route>
            <Route path="/:country">
              <Country
                selectLanguage={selectLanguage}
                setIsMainPageOpen={setIsMainPageOpen}
              />
            </Route>
          </Switch>
        </Grid>
        <Footer />
        {isModalActive && <Form />}
      </Grid>
    </Router>
  );
};
