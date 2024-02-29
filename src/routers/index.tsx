import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { PrivateRoute } from '@routers/PrivateRoute';

// Pages
import MainApp from '@pages/main';
import SignInPage from '@pages/auth/signin';
import SignUpPage from '@pages/auth/signup';
import { ROUTES } from '@constants/app.constant';

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <PrivateRoute path={ROUTES.APP} children={<MainApp />}/>
        <Route path={ROUTES.SIGNIN_PAGE} children={<SignInPage />}></Route>
        <Route path={ROUTES.SIGNUP_PAGE} children={<SignUpPage />}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRouter;