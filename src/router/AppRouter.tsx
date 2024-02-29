import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { PrivateRoute } from '@router/PrivateRoute';

// Pages
import HomePage from '@pages/home';
import SignInPage from '@pages/auth/signin';
import SignUpPage from '@pages/auth/signup';

export const ROUTES = {
  HOMEPAGE: '/home',
  SETTING_PAGE: '/setting',
  SIGNIN_PAGE: '/auth/sign-in',
  SIGNUP_PAGE: '/auth/sign-up',
};

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect exact from="/" to={ROUTES.HOMEPAGE}/>
        <PrivateRoute exact path={ROUTES.HOMEPAGE} children={<HomePage/>}/>
        <PrivateRoute exact path={ROUTES.SETTING_PAGE} children={<HomePage/>}/>
        <Route path={ROUTES.SIGNIN_PAGE} children={<SignInPage/>}></Route>
        <Route path={ROUTES.SIGNUP_PAGE} children={<SignUpPage/>}></Route>
      </IonRouterOutlet>

      {/*UI have Tabar*/}
      {/*<IonTabs>
        <IonTabBar slot="bottom">
        </IonTabBar>
      </IonTabs>*/}
    </IonReactRouter>
  );
};

export default AppRouter;