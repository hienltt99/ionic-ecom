import React from 'react';

// Assets
import { ICONS } from '@assets';
import './SplashScreen.scss';

const SlashScreen: React.FC = () => {
  return (
    <div className={"splash-screen"}>
      <img src={ICONS.ICON_SPLASH} alt=""/>
    </div>
  );
};

export default SlashScreen;