import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledGridWrapper = styled(Grid)`
  max-width: 20vw;
  @media (max-width: 650px) {
    max-width: 54vw;
  }
`;

const StyledTypographyCountry = styled(Typography)`
  font-size: 26px;
  @media (max-width: 850px) {
    width: 115px;
    font-size: 20px;
  }
`;

const StyledImage = styled('img')`
  width: 19vw;
  height: 25vh;
  border-radius: 4px;
  @media (max-width: 850px) {
    height: 20vh;
  }
  @media (max-width: 650px) {
    width: 170px;
    height: 18vh;
  }
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
  @media (max-width: 850px) {
    margin: 10px;
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
  useEffect(() => {
    setIsMainPageOpen(true);
  });

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ padding: '5px 50px' }}
    >
      {!countries.length ? (
        <Typography>Not Found</Typography>
      ) : (
        countries.map((country: ICountry, index: number) => {
          return (
            <StyledLink to={`/${country.country}`} key={index}>
              <StyledCard>
                <CardContent>
                  <StyledImage src={country.imageUrl} alt={country.name} />
                  <StyledGridWrapper
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    wrap="nowrap"
                  >
                    <StyledTypographyCountry variant="h5">
                      {country.name}
                    </StyledTypographyCountry>
                    <Typography>{country.capital}</Typography>
                  </StyledGridWrapper>
                </CardContent>
              </StyledCard>
            </StyledLink>
          );
        })
      )}
    </Grid>
  );
};
