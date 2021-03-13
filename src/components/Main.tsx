import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Header } from './Header';
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
        <div style={{ minHeight: 'calc(100vh - 128px)' }}>
          <Switch>
            <Route exact path="/">
              <div>countries</div>
            </Route>
            <Route path="/:string">
              <div>country</div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Grid>
    </Router>
  );
};
