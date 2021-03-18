import React, { Dispatch, useState } from 'react';
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
import { connect } from 'react-redux';
import { ChangeModalAuth } from '../redux/actions/controlersAction';

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
  background-color: #2b3d9c;
  transition: all 0.5s;
  box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 1px 0px rgb(0 0 0 / 12%);
  &:hover {
    transition: all 0.5s;
    background-color: #1e329c;
  }
`;

interface IHeaderProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  selectLanguage: string;
  setselectLanguage: (selectLanguage: string) => void;
  isModalActive: boolean;
  changeModalActive: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  searchValue,
  setSearchValue,
  selectLanguage,
  setselectLanguage,
  changeModalActive,
  isModalActive,
}) => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setselectLanguage(event.target.value as string);
  };
  console.log(changeModalActive);
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
              <StyledTextField
                placeholder={appInterfaces[selectLanguage].placeholder}
                inputProps={{ 'aria-label': 'search' }}
                autoFocus={true}
                value={searchValue}
                onChange={(e: any) => {
                  setSearchValue(e.target.value);
                }}
              />
              <IconButton onClick={() => setSearchValue('')}>
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
          <FormControl style={{ margin: '0 10px', color: '#fff' }}>
            <Select
              value={selectLanguage}
              onChange={handleChange}
              // displayEmpty
              style={{ color: '#fff' }}
            >
              <MenuItem value={0} selected>
                English
              </MenuItem>
              <MenuItem value={1}>Русский</MenuItem>
              <MenuItem value={2}>Беларуская</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            onClick={() => {
              changeModalActive();
            }}
            edge="end"
            color="inherit"
            aria-label="open drawer"
          >
            <AccountCircle />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state: any, ownProps: any) => {
  console.log(ownProps);
  return {
    searchValue: ownProps.searchValue,
    selectLanguage: ownProps.selectLanguage,
    isModalActive: state.controlers.isModalActive,
  };
};
interface ImapStateToDispatch {
  changeModalctive: () => void;
}
const mapStateToDispatch = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    changeModalActive: () => {
      const action = ChangeModalAuth();
      dispatch(action);
    },
    setSearchValue: ownProps.setSearchValue,
    setSelectLanguage: ownProps.setSelectLanguage,
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(Header);
