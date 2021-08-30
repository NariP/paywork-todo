import React from 'react';
import { Routes } from './routes';

const App: React.FC<{ setTheme: Function }> = ({ setTheme }) => {
  return <Routes setTheme={setTheme} />;
};

export default App;
