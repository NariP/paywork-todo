import React, { useState } from 'react';
import App from './App';
import { GlobalStyle, light, dark } from 'styles';
import { Global, ThemeProvider } from '@emotion/react';

const ThemeComponent = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? light : dark}>
      <Global styles={GlobalStyle} />
      <App setTheme={setTheme} />
    </ThemeProvider>
  );
};
export default ThemeComponent;
