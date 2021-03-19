import React, { useEffect } from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
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
import appInterfaces from '../../../constants/AppInterfaces';
import { Widgets } from '../Country/components/Widgets';
import { CountryBunner } from './components/CountryBunner';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledGridCarousel = styled(Grid)`
  position: relative;
  margin-top: -100px;
  margin-bottom: 30px;
  width: 100%;
  @media (max-width: 1000px) {
    margin-top: -70px;
  }
  @media (max-width: 850px) {
    margin-top: -50px;
  }
  @media (max-width: 650px) {
    margin-top: -30px;
  }
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 1vh;
  right: 1vw;
  z-index: 4;
`;

interface ICountryProps {
  selectLanguage: string;
  setIsMainPageOpen: (isMainPageOPen: boolean) => void;
  countriesData: any;
}

const Country: React.FC<ICountryProps> = ({
  selectLanguage,
  setIsMainPageOpen,
  countriesData,
}) => {
  const handle = useFullScreenHandle();
  const { params } = useRouteMatch();
  const country = countriesData.find(
    // @ts-ignore
    (item) => item.name === params.country
  );

  useEffect(() => {
    setIsMainPageOpen(false);
  });

  if (!country) {
    return <span>{appInterfaces[selectLanguage].notFound} </span>;
  }
  console.log();
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
          <YMaps
            key={
              country.localizations[selectLanguage].lang === 'en'
                ? 'en_US'
                : 'ru_RU'
            }
            query={{
              lang:
                country.localizations[selectLanguage].lang === 'en'
                  ? 'en_US'
                  : 'ru_RU',
            }}
            style={{ width: '70vw', height: '70vh' }}
          >
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
      <FullScreen handle={handle}>
        <StyledGridCarousel container alignItems="center" justify="center">
          <StyledIconButton onClick={handle.enter}>
            <FullscreenIcon />
          </StyledIconButton>
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
        </StyledGridCarousel>
      </FullScreen>
    </Grid>
  );
};
interface Istate {
  countries: { countries: {}[] };
}
const mapStateToProps = (state: Istate, ownProps: any) => {
  return {
    selectLanguage: ownProps.selectLanguage,
    countriesData: state.countries.countries,
  };
};

export default connect(mapStateToProps)(Country);
