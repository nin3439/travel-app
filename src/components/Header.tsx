import React from 'react';
import { fade } from '@material-ui/core/styles';
import { Search, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Grid,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledInputBase = styled(InputBase)`
  ${({ theme }) => `
padding: ${theme.spacing(1, 1, 1, 0)};
transition: ${theme.transitions.create('width')};
width: 100%
${theme.breakpoints.up('sm')} {
  width: 12ch;
  &:focus {
    width: 20ch;
  },
},
`}
`;

const StyledGrid = styled(Grid)`
  ${({ theme }) => `
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${fade(theme.palette.common.white, 0.15)};
  &:hover {
    background-color: ${fade(theme.palette.common.white, 0.25)};
  };
  margin-left: 20px;
  width: 100%
${theme.breakpoints.up('sm')} {
  margin-left: ${theme.spacing(1)};
  width: auto;
},
`}
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
          style={{ width: '100%' }}
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            wrap="nowrap"
          >
            <StyledLink to="/">
              <Typography variant="h6" noWrap>
                Travel-app
              </Typography>
            </StyledLink>
            <StyledGrid>
              <Search style={{ pointerEvents: 'none', padding: '0 5px' }} />
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </StyledGrid>
          </Grid>
          <IconButton edge="end" color="inherit" aria-label="open drawer">
            <AccountCircle />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
