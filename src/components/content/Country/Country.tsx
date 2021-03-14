import React from 'react';
import { Typography } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import mockCountries from '../../../models/MockCountries';

export const Country: React.FC = () => {
  const { params } = useRouteMatch();
  const country = mockCountries.find(
    // @ts-ignore
    (item) => item.name === params.string
  );

  if (!country) {
    return <span>Не найдено</span>;
  }

  return <Typography>{country.name} </Typography>;
};
