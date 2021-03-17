import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import mockCountries from '../../../models/MockCountries';
import appInterfaces from '../../../models/AppInterfaces';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/lazy';
import {
  YMaps,
  Map,
  FullscreenControl,
  ZoomControl,
  Placemark,
} from 'react-yandex-maps';

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
        {appInterfaces[selectLanguage].capital}:
        {country.localizations[selectLanguage].capital}
      </Typography>
      <Typography variant="body1">
        {country.localizations[selectLanguage].description}
      </Typography>
      <Carousel width="60vw">
        {country.countryPlaces.map(
          ({ photoUrl, name, localizations }: any, index: number) => {
            return (
              <Grid key={index}>
                <img src={`${photoUrl}`} alt={`${name}`} width="100vw" />
                <Typography variant="body2" className="legend">
                  <Typography variant="body1">{`${localizations[selectLanguage].name}`}</Typography>
                  {`${localizations[selectLanguage].description}`}
                </Typography>
              </Grid>
            );
          }
        )}
      </Carousel>
      <ReactPlayer url={country.videoUrl} controls={true} loop={true} />
      <div style={{ padding: '30px' }}>
        <YMaps style={{ width: '600px', height: '600px' }}>
          <Map
            style={{ width: '600px', height: '600px' }}
            defaultState={{
              center: country.capitalLocation.coordinates,
              zoom: 6,
              controls: [],
            }}
          >
            <FullscreenControl />
            <ZoomControl options={{ float: 'right' }} />
            <Placemark geometry={country.capitalLocation.coordinates} />
          </Map>
        </YMaps>
      </div>
    </Grid>
  );
};
