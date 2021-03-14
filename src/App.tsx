import React from 'react';
import { Main } from './components/Main';
import { ThemeProvider } from 'styled-components';
import { createMuiTheme, StylesProvider } from '@material-ui/core/styles';
import './App.css';

const customTheme = createMuiTheme();

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <Main />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
