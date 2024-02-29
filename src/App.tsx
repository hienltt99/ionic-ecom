import {
  IonApp,
  setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '@theme/variables.css';

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect, useState } from 'react';

// Router
import AppRouter from '@router/AppRouter';

// Providers
import { AuthProvider } from '@providers/AuthProvider';

// Pages
import SplashScreen from '@pages/splash';

// Utils
import { TIME_SPLASH } from '@utils/constants/app.constant';

setupIonicReact();

const App: React.FC = () => {
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    const timeoutSplash = setTimeout(() => {
      setIsSetup(true);
    }, TIME_SPLASH);

    return () => {
      clearTimeout(timeoutSplash);
    };
  }, []);

  return (
    <IonApp>
      <AuthProvider>
        {!isSetup ? <SplashScreen/> : <AppRouter/>}
      </AuthProvider>
    </IonApp>
  );
};

export default App;
