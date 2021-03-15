import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import mockCountries from '../../../models/MockCountries';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/lazy';

export const Country: React.FC = () => {
  const { params } = useRouteMatch();
  const country = mockCountries.find(
    // @ts-ignore
    (item) => item.name === params.string
  );

  if (!country) {
    return <span>Не найдено</span>;
  }
  return (
    <Typography style={{ margin: '10px' }}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <h2>{country.name}</h2>
        <img
          style={{ border: 'solid #3f51b5 6px' }}
          width="35%"
          src={country.imageUrl}
          alt={country.name}
        />
        <div>Capital: {country.localizations[0].capital}</div>
        <div>{country.localizations[0].description}</div>
        <Carousel width="60vw">
          {country.countryPlaces.map(
            ({ photoUrl, name, localizations }: any) => {
              return (
                <div>
                  <img src={`${photoUrl}`} alt={`${name}`} width="100vw" />
                  <p className="legend">
                    <h3>{`${name}`}</h3>
                    {`${localizations[0].description}`}
                  </p>
                </div>
              );
            }
          )}
        </Carousel>
        <ReactPlayer url={country.videoUrl} controls={true} loop={true} />
      </Grid>
    </Typography>
  );
};
