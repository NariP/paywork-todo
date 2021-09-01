import React from 'react';
import { Redirect } from 'react-router-dom';

import { useUser } from 'utils/hooks';
import { ROOTS } from 'routes/paths';
import { PageLoading } from 'components/Loading';

const AuthProtect: React.FC = ({ children }) => {
  const { userLoading, isAuthenticated } = useUser();

  if (userLoading) return <PageLoading />;

  if (!isAuthenticated()) return <Redirect to={ROOTS} />;
  return <> {children}</>;
};

export default AuthProtect;
