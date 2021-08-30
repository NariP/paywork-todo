import React, { useState } from 'react';
import App from './App';
import { GlobalStyle, light, dark } from 'style';
import { ThemeProvider } from 'styled-components';
import { GlobalLayout } from './components/Layout';

const ThemeComponent = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? light : dark}>
      <GlobalStyle />
      <GlobalLayout setTheme={setTheme}>
        <App />
      </GlobalLayout>
    </ThemeProvider>
  );
};
export default ThemeComponent;
