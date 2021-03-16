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
}

export const Header: React.FC<IHeaderProps> = ({
  searchValue,
  setSearchValue,
}) => {
  // const [selectLangValue, setSelectLangValue] = React.useState('');

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setSelectLangValue(event.target.value as string);
  // };
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
                placeholder="Search…"
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
              // value={selectLangValue}
              // onChange={handleChange}
              displayEmpty
              style={{ color: '#fff' }}
            >
              <MenuItem>English</MenuItem>
              <MenuItem>Русский</MenuItem>
              <MenuItem>Белорусский</MenuItem>
            </Select>
          </FormControl>
          <IconButton edge="end" color="inherit" aria-label="open drawer">
            <AccountCircle />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
