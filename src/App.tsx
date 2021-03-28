import React from 'react';
import Main from './components/MainContainer';
import { ThemeProvider } from 'styled-components';
import { createMuiTheme, StylesProvider } from '@material-ui/core/styles';

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
