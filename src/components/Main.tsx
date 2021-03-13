import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Header } from './Header';
import { Countries } from '../components/content/Countries';
import { Country } from '../components/content/Country/Country';
import { Footer } from './Footer';

export const Main: React.FC = () => {
  return (
    <Router>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Header />
        <Grid style={{ minHeight: 'calc(100vh - 128px)' }}>
          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route path="/:string">
              <Country />
            </Route>
          </Switch>
        </Grid>
        <Footer />
      </Grid>
    </Router>
  );
};
