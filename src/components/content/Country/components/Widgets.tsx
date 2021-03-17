import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../../../../api/apiWeather';
import { getCurrency } from '../../../../api/apiCurrency';
import { Grid, Typography } from '@material-ui/core';
import appInterfaces from '../../../../models/AppInterfaces';
import 'moment/min/locales';
import moment from 'moment';
import styled from 'styled-components';
const isEmpty = require('lodash.isempty');

const StyledGrid = styled(Grid)`
  position: absolute;
  right: 50px;
  top: 100px;
  background-color: #cccccc54;
  max-width: 140px;
  border-radius: 4px;
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
    <StyledGrid container alignItems="center" justify="center">
      <Typography variant="body1">{capital}</Typography>
      {isEmpty(weatherData) ? (
        ''
      ) : (
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Typography variant="body1">
              {weatherData.main.temp.toFixed(0)}°C
            </Typography>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
          </Grid>

          <Typography variant="body1" align="center">
            {weatherData.weather[0].description}
          </Typography>
          <Typography style={{ marginTop: '10px' }} align="center">
            {date}
          </Typography>
        </Grid>
      )}

      {isEmpty(currencies) ? (
        ''
      ) : (
        <Grid style={{ marginTop: '10px' }}>
          <Typography align="center">
            {appInterfaces[selectLanguage][currency]}
          </Typography>
          <Typography>
            {' '}
            1 {appInterfaces[selectLanguage].USD} - {currencies.USD.toFixed(2)}{' '}
          </Typography>
          <Typography>
            1 {appInterfaces[selectLanguage].EUR} - {currencies.EUR.toFixed(2)}{' '}
          </Typography>
          <Typography>
            1 {appInterfaces[selectLanguage].BYN} - {currencies.BYN.toFixed(2)}{' '}
          </Typography>
        </Grid>
      )}
    </StyledGrid>
  );
};
