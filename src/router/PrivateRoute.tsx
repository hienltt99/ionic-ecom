import React, { useContext } from 'react';
import { RouteProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '@providers/AuthProvider';
import { ROUTES } from '@router/AppRouter';

interface PrivateRouteProps extends RouteProps {
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) return <Redirect to={ROUTES.SIGNIN_PAGE}/>;
  return (
    <Route {...props}>
      {props.children}
    </Route>
  );
};