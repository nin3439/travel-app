import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import mockCountries from '../../../models/MockCountries';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/lazy';

interface ICountryProps {
  selectLanguage: string;
}

export const Country: React.FC<ICountryProps> = ({ selectLanguage }) => {
  const { params } = useRouteMatch();
  const country = mockCountries.find(
    // @ts-ignore
    (item) => item.name === params.string
  );

  if (!country) {
    return <span>Not Found</span>;
  }

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Typography variant="h3">
        {country.localizations[selectLanguage].name}
      </Typography>
      <img
        style={{ border: 'solid #3f51b5 6px' }}
        width="35%"
        src={country.imageUrl}
        alt={country.localizations[selectLanguage].name}
      />
      <Typography variant="subtitle1">
        Capital: {country.localizations[selectLanguage].capital}
      </Typography>
      <Typography variant="body1">
        {country.localizations[selectLanguage].description}
      </Typography>
      <Carousel width="60vw">
        {country.countryPlaces.map(({ photoUrl, name, localizations }: any) => {
          return (
            <Grid>
              <img src={`${photoUrl}`} alt={`${name}`} width="100vw" />
              <Typography variant="body2" className="legend">
                <Typography variant="body1">{`${localizations[selectLanguage].name}`}</Typography>
                {`${localizations[selectLanguage].description}`}
              </Typography>
            </Grid>
          );
        })}
      </Carousel>
      <ReactPlayer url={country.videoUrl} controls={true} loop={true} />
    </Grid>
  );
};
