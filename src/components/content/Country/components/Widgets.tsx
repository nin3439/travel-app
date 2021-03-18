import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../../../../api/apiWeather';
import { getCurrency } from '../../../../api/apiCurrency';
import { Grid, Typography } from '@material-ui/core';
import appInterfaces from '../../../../models/AppInterfaces';
import 'moment/min/locales';
import moment from 'moment';
import styled from 'styled-components';
const isEmpty = require('lodash.isempty');

const StyledTypography = styled(Typography)`
  @media (max-width: 850px) {
    font-size: 14px;
  }
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const StyledGrid = styled(Grid)``;

const StyledGridWidget = styled(Grid)`
  color: #fff;
  background-color: #123274;
  width: 15vw;
  height: 22vh;
  padding: 10px;
  @media (max-width: 750px) {
    padding: 2px;
  }
`;

interface IWidgetsProps {
  capitalID: number;
  lang: string;
  capital: string;
  currency: string;
  selectLanguage: string;
}

export const Widgets: React.FC<IWidgetsProps> = ({
  capitalID,
  capital,
  lang,
  currency,
  selectLanguage,
}) => {
  const [weatherData, setWeatherData] = useState<any>({});
  const [date, setDate] = useState<any>('');
  const [currencies, setCurrencies] = useState<any>({});
  useEffect(() => {
    getCurrency(currency).then((res) => setCurrencies(res));
  }, [currency]);

  useEffect(() => {
    getCurrentWeather(capitalID, lang).then((res) => setWeatherData(res));
  }, [capitalID, lang]);

  useEffect(() => {
    let timer = setTimeout(() => {
      moment.locale(lang);
      if (lang === 'en') {
        setDate(moment().format('dddd, Do MMMM YYYY, h:mm:ss a'));
      } else {
        setDate(moment().format('dddd, Do MMMM YYYY, HH:mm:ss'));
      }
    }, 1000);
    return function cleanUp() {
      clearTimeout(timer);
    };
  }, [date, lang]);

  return (
    <StyledGrid>
      <StyledGridWidget
        container
        alignItems="center"
        justify="center"
        direction="column"
      >
        <StyledTypography align="center">{date}</StyledTypography>
      </StyledGridWidget>
      <StyledGridWidget
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{ marginTop: '10px' }}
      >
        <StyledTypography variant="body1">{capital}</StyledTypography>
        {isEmpty(weatherData) ? (
          ''
        ) : (
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <StyledTypography variant="body1" style={{ marginRight: '25px' }}>
                {weatherData.main.temp.toFixed(0)}°C
              </StyledTypography>
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
            </Grid>
            <StyledTypography variant="body1" align="center">
              {weatherData.weather[0].description}
            </StyledTypography>
          </Grid>
        )}
      </StyledGridWidget>

      <StyledGridWidget
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{ marginTop: '10px' }}
      >
        {isEmpty(currencies) ? (
          ''
        ) : (
          <Grid>
            <StyledTypography align="center" style={{ marginBottom: '10px' }}>
              {appInterfaces[selectLanguage][currency]}
            </StyledTypography>
            <StyledTypography>
              {' '}
              1 {appInterfaces[selectLanguage].USD} -{' '}
              {currencies.USD.toFixed(2)}{' '}
            </StyledTypography>
            <StyledTypography>
              1 {appInterfaces[selectLanguage].EUR} -{' '}
              {currencies.EUR.toFixed(2)}{' '}
            </StyledTypography>
            <StyledTypography>
              1 {appInterfaces[selectLanguage].BYN} -{' '}
              {currencies.BYN.toFixed(2)}{' '}
            </StyledTypography>
          </Grid>
        )}
      </StyledGridWidget>
    </StyledGrid>
  );
};
