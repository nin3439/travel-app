import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledImage = styled('img')`
  width: 20vw;
  height: 21vh;
  border-radius: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  transform: scale(1);
  transition: transform 0.5s;
  &:hover {
    transition: transform 0.5s;
    transform: scale(1.1);
  }
`;

const StyledCard = styled(Card)`
  margin: 15px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

interface ICountry {
  country: string;
  name: string;
  capital: string;
  imageUrl: string;
}

interface ICountriesProps {
  countries: ICountry[];
  setIsMainPageOpen: (isMainPageOPen: boolean) => void;
}

export const Countries: React.FC<ICountriesProps> = ({
  countries,
  setIsMainPageOpen,
}) => {
  setIsMainPageOpen(true);
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {!countries.length ? (
        <Typography>Not Found</Typography>
      ) : (
        countries.map((country: ICountry, index: number) => {
          return (
            <StyledLink to={`/${country.country}`} key={index}>
              <StyledCard>
                <CardContent>
                  <StyledImage src={country.imageUrl} alt={country.name} />
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ maxWidth: '20vw' }}
                    wrap="nowrap"
                  >
                    <Typography variant="h5">{country.name}</Typography>
                    <Typography>{country.capital}</Typography>
                  </Grid>
                </CardContent>
              </StyledCard>
            </StyledLink>
          );
        })
      )}
    </Grid>
  );
};
