import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalLayout } from 'components/Layout';
import { Main, PageNotFound } from 'pages';

const Routes: React.FC<{ setTheme: Function }> = ({ setTheme }) => {
  return (
    <Router>
      <GlobalLayout setTheme={setTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={PageNotFound} />
        </Switch>
      </GlobalLayout>
    </Router>
  );
};

export default Routes;
