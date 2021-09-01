import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalLayout } from 'components/Layout';
import { PageNotFound } from 'pages';
import { PageRoutes } from 'routes';

const Routes: React.FC<{ setTheme: Function }> = ({ setTheme }) => {
  return (
    <Router>
      <GlobalLayout setTheme={setTheme}>
        <Switch>
          {PageRoutes.map((route, idx) => {
            const Component = route.component;
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;
            return (
              <Route
                key={idx}
                exact={route.exact}
                path={route.path}
                render={() => (
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                )}
              />
            );
          })}
          <Route component={PageNotFound} />
        </Switch>
      </GlobalLayout>
    </Router>
  );
};

export default Routes;
