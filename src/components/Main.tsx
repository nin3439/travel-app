import React from 'react';
import { Grid } from '@material-ui/core';
import { Header } from './Header';
import { Footer } from './Footer';

export const Main: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Header />
      <div style={{ minHeight: 'calc(100vh - 128px)' }}></div>
      <Footer />
    </Grid>
  );
};
