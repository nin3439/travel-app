import React, { useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import mockCountries from '../../../models/MockCountries';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/lazy';
import {
  YMaps,
  Map,
  FullscreenControl,
  ZoomControl,
  Placemark,
  TypeSelector,
} from 'react-yandex-maps';
import { Widgets } from '../Country/components/Widgets';
import { CountryBunner } from './components/CountryBunner';

interface ICountryProps {
  selectLanguage: string;
  setIsMainPageOpen: (isMainPageOPen: boolean) => void;
}

export const Country: React.FC<ICountryProps> = ({
  selectLanguage,
  setIsMainPageOpen,
}) => {
  const { params } = useRouteMatch();
  const country = mockCountries.find(
    // @ts-ignore
    (item) => item.name === params.country
  );

  useEffect(() => {
    setIsMainPageOpen(false);
  });

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
      <CountryBunner
        name={country.localizations[selectLanguage].name}
        capital={country.localizations[selectLanguage].capital}
        description={country.localizations[selectLanguage].description}
        image={country.imageUrl}
        selectLanguage={selectLanguage}
      />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ padding: '5vh 0' }}
      >
        <Widgets
          capitalID={country.capitalID}
          lang={country.localizations[selectLanguage].lang}
          capital={country.localizations[selectLanguage].capital}
          currency={country.currency}
          selectLanguage={selectLanguage}
        />
        <Grid style={{ marginRight: '7vw' }}>
          <YMaps style={{ width: '70vw', height: '70vh' }}>
            <Map
              style={{ width: '70vw', height: '70vh' }}
              defaultState={{
                center: country.capitalLocation.coordinates,
                zoom: 6,
                controls: [],
              }}
            >
              <FullscreenControl />
              <ZoomControl options={{ float: 'right' }} />
              <TypeSelector options={{ float: 'right' }} />
              <Placemark geometry={country.capitalLocation.coordinates} />
            </Map>
          </YMaps>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{
          position: 'relative',
          paddingTop: '56.25%',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <ReactPlayer
          url={country.videoUrl}
          controls={true}
          loop={true}
          width="80%"
          height="80%"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            marginLeft: '10%',
          }}
        />
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{
          marginTop: '-100px',
          width: '100%',
        }}
      >
        <Carousel
          width="80vw"
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          stopOnHover={true}
          transitionTime={2000}
          useKeyboardArrows={true}
          showThumbs={true}
        >
          {country.countryPlaces.map(
            ({ photoUrl, name, localizations }: any, index: number) => {
              return (
                <Grid key={index}>
                  <img src={`${photoUrl}`} alt={`${name}`} width="100vw" />
                  <Typography variant="h5" className="legend">
                    <Typography variant="body1">{`${localizations[selectLanguage].name}`}</Typography>
                    {`${localizations[selectLanguage].description}`}
                  </Typography>
                </Grid>
              );
            }
          )}
        </Carousel>
      </Grid>
    </Grid>
  );
};
