import React from 'react';
import { Typography, Grid, Divider, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBackIos } from '@material-ui/icons';
import appInterfaces from '../../../../models/AppInterfaces';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  transition: all 0.5s;
  &:hover {
    color: #123274;
    transition: all 0.5s;
  }
`;

const StyledGridContentBunner = styled(Grid)`
  z-index: 2;
  position: absolute;
  top: 7.125rem;
  left: 0;
  width: 60%;
  margin-right: 1.875rem;
`;

const StyledGridContent = styled(Grid)`
  padding: 4.375rem 3.75rem 4.375rem 15%;
  background-color: #fff;
`;

const GridBackground = styled(Grid)`
  position: relative;
  z-index: 1;
  background-color: #005b87;
  width: 68%;
  height: 0.0625rem;
  min-height: 43.75rem;
  margin-top: 0;
  margin-left: 25%;
  margin-right: auto;
`;

const StyledImg = styled('img')`
  object-fit: cover;
  font-family: 'object-fit: cover;';
  width: 100%;
  height: 43.75rem;
`;

const StyledBox = styled(Box)`
  position: absolute;
  right: 0;
  z-index: 0;
  background-color: #123274;
  width: 23.3125rem;
  height: 70vh;
  bottom: -20vh;
`;

interface ICountryBunnerProps {
  name: string;
  capital: string;
  description: string;
  image: string;
  selectLanguage: string;
}

export const CountryBunner: React.FC<ICountryBunnerProps> = ({
  name,
  capital,
  description,
  image,
  selectLanguage,
}) => {
  return (
    <Grid style={{ marginBottom: '3rem' }}>
      <StyledGridContentBunner>
        <StyledGridContent>
          <Grid>
            <StyledLink to="/">
              <ArrowBackIos />
              <Typography>Back to all countries</Typography>
            </StyledLink>
          </Grid>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="subtitle1">
            {appInterfaces[selectLanguage].capital} - {capital}
          </Typography>
          <Divider
            style={{
              width: '30%',
              height: '3px',
              borderRadius: '4px',
              margin: '10px 0',
            }}
          />
          <Typography variant="body1">{description}</Typography>
        </StyledGridContent>
      </StyledGridContentBunner>
      <GridBackground>
        <StyledImg src={image} alt={name} />
      </GridBackground>
      <StyledBox />
    </Grid>
  );
};
