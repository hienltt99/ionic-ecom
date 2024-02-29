import './IntroContainer.scss';
import { ICONS } from '@assets';

interface IntroContainerProps {
  message: string;
  describe: string;
}

const IntroContainer = ({ message, describe }: IntroContainerProps) => {
  return (
    <div className={'intro-container d-flex flex-column align-items-center gap-2'}>
      <img src={ICONS.ICON_APP} alt=""/>
      <div className={'txt-header'}>{message}</div>
      <div className={'txt-describe'}>{describe}</div>
    </div>
  );
};

export default IntroContainer;