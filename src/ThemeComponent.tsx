import React, { useState } from 'react';
import App from './App';
import { GlobalStyle, light, dark } from 'styles';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalLayout } from './components/Layout';

const ThemeComponent = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? light : dark}>
      <Global styles={GlobalStyle} />
      <GlobalLayout setTheme={setTheme}>
        <App />
      </GlobalLayout>
    </ThemeProvider>
  );
};
export default ThemeComponent;
