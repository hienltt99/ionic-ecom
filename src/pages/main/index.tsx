import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { home, pricetag, cart, people, search } from 'ionicons/icons';

// Pages
import HomePage from '@pages/home';
import AccountPage from '@pages/account';
import OfferPage from '@pages/offer';
import CartPage from '@pages/cart';
import ExplorePage from '@pages/explore';

// Routers
import { PrivateRoute } from '@routers/PrivateRoute';

// Constants
import { ROUTES } from '@constants/app.constant';

const MainApp = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <PrivateRoute path={ROUTES.HOMEPAGE} children={<HomePage />}></PrivateRoute>
        <PrivateRoute path={ROUTES.EXPLORE_PAGE} children={<ExplorePage />}></PrivateRoute>
        <PrivateRoute path={ROUTES.CART_PAGE} children={<CartPage />}></PrivateRoute>
        <PrivateRoute path={ROUTES.OFFER_PAGE} children={<OfferPage />}></PrivateRoute>
        <PrivateRoute path={ROUTES.ACCOUNT_PAGE} children={<AccountPage />}></PrivateRoute>
        <Route exact path={ROUTES.APP}>
          <Redirect to={ROUTES.HOMEPAGE} />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href={ROUTES.HOMEPAGE}>
          <IonIcon aria-hidden="true" icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href={ROUTES.EXPLORE_PAGE}>
          <IonIcon aria-hidden="true" icon={search} />
          <IonLabel>Explore</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href={ROUTES.CART_PAGE}>
          <IonIcon aria-hidden="true" icon={cart} />
          <IonLabel>Cart</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href={ROUTES.OFFER_PAGE}>
          <IonIcon aria-hidden="true" icon={pricetag} />
          <IonLabel>Offer</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href={ROUTES.ACCOUNT_PAGE}>
          <IonIcon aria-hidden="true" icon={people} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default MainApp;