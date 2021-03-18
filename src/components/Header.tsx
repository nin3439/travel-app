import React from 'react';
import { Search, AccountCircle, Clear } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';
import appInterfaces from '../models/AppInterfaces';

const StyledGridWrapper = styled(Grid)`
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

const StyledTypography = styled(Typography)`
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

const StyledTextField = styled(TextField)`
  padding: 0 0 0 10px;
  max-width: 120px;
  & .MuiInputBase-root {
    color: #fff;
  }
`;

const StyledGrid = styled(Grid)`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #ffffff2e;
  transition: all 0.5s;
  margin-left: 20px;
  box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 1px 0px rgb(0 0 0 / 12%);
  &:hover {
    background-color: #ffffff43;
    transition: all 0.5s;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  height: 48px;
  margin-left: -5px;
  background-color: #061567;
  transition: all 0.5s;
  box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 1px 0px rgb(0 0 0 / 12%);
  &:hover {
    transition: all 0.5s;
    background-color: #111a4e;
  }
`;

interface IHeaderProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  selectLanguage: string;
  setSelectLanguage: (selectLanguage: string) => void;
  isMainPageOpen: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  searchValue,
  setSearchValue,
  selectLanguage,
  setSelectLanguage,
  isMainPageOpen,
}) => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectLanguage(event.target.value as string);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#123274' }}>
      <Toolbar>
        <StyledGridWrapper
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
              <StyledTypography variant="h6" noWrap>
                Dream Travel
              </StyledTypography>
            </StyledLink>
            {isMainPageOpen ? (
              <Grid container direction="row" alignItems="center" wrap="nowrap">
                <StyledGrid>
                  <StyledTextField
                    placeholder={appInterfaces[selectLanguage].placeholder}
                    inputProps={{ 'aria-label': 'search' }}
                    autoFocus={true}
                    value={searchValue}
                    onChange={(e: any) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                  <IconButton type="submit" onClick={() => setSearchValue('')}>
                    <Clear style={{ color: '#fff' }} />
                  </IconButton>
                </StyledGrid>
                <StyledButton
                  variant="contained"
                  onClick={(e) => e.preventDefault()}
                >
                  <Search style={{ color: '#fff' }} />
                </StyledButton>
              </Grid>
            ) : (
              ''
            )}
          </Grid>
          <FormControl style={{ margin: '0 10px', color: '#fff' }}>
            <Select
              value={selectLanguage}
              onChange={handleChange}
              style={{ color: '#fff', width: '120px' }}
            >
              <MenuItem value={0} selected>
                English
              </MenuItem>
              <MenuItem value={1}>Русский</MenuItem>
              <MenuItem value={2}>Беларуская</MenuItem>
            </Select>
          </FormControl>
          <IconButton edge="end" color="inherit" aria-label="open drawer">
            <AccountCircle />
          </IconButton>
        </StyledGridWrapper>
      </Toolbar>
    </AppBar>
  );
};
