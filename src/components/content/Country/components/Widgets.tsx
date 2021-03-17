import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../../../../api/apiWeather';
import { Grid, Typography } from '@material-ui/core';
import { weatherDescBY } from '../../../../constants/weatherDescBy';
const isEmpty = require('lodash.isempty');

interface IWidgetsProps {
  capitalID: number;
  lang: string;
  capital: string;
}

export const Widgets: React.FC<IWidgetsProps> = ({
  capitalID,
  capital,
  lang,
}) => {
  const [weatherData, setWeatherData] = useState<any>({});

  useEffect(() => {
    getCurrentWeather(capitalID, lang).then((res) => setWeatherData(res));
  }, [capitalID, lang]);

  console.log(lang);

  return (
    <Grid>
      <Typography variant="body1">{capital}</Typography>
      {isEmpty(weatherData) ? (
        ''
      ) : (
        <Grid>
          <Typography variant="body1">
            {weatherData.main.temp.toFixed(0)}°C
          </Typography>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
          <Typography variant="body1">
            {lang === 'by'
              ? weatherDescBY[weatherData.weather[0].description]
              : weatherData.weather[0].description}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
