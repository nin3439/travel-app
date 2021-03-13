import React from 'react';
import mockCountries from '../../models/MockCountries';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

export const Countries: React.FC = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {mockCountries.map((country: any, index: number) => {
        return (
          <Link to={`/${country.country}`} key={index}>
            <Card style={{ margin: '10px', width: '20vw', height: '25vh' }}>
              <CardContent>
                <img
                  src={`${country.imageUrl}`}
                  alt={`${country.country}`}
                  width="150vw"
                  height="100vh"
                />
                <Typography>{country.country.toUpperCase()}</Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
};
