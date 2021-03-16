import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Header } from './Header';
import { Countries } from '../components/content/Countries';
import { Country } from '../components/content/Country/Country';
import { Footer } from './Footer';
import mockCountries from '../models/MockCountries';

export const Main: React.FC = () => {
  const [selectLanguage, setselectLanguage] = React.useState('0');

  const countriesMainPage = mockCountries.map((country: any) => {
    return {
      name: country.localizations[selectLanguage].name,
      capital: country.localizations[selectLanguage].capital,
      imageUrl: country.imageUrl,
    };
  });

  const [countries, setCountries] = useState(countriesMainPage);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const foundCountries = countriesMainPage.filter((country: any) => {
      return (
        country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setCountries(foundCountries);
  }, [searchValue]);

  return (
    <Router>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectLanguage={selectLanguage}
          setselectLanguage={setselectLanguage}
        />
        <Grid
          style={{ minHeight: 'calc(100vh - 128px)', padding: '10px 20px' }}
        >
          <Switch>
            <Route exact path="/">
              <Countries countries={countries} />
            </Route>
            <Route path="/:string">
              <Country selectLanguage={selectLanguage} />
            </Route>
          </Switch>
        </Grid>
        <Footer />
      </Grid>
    </Router>
  );
};
