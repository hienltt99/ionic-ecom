import { useHistory } from 'react-router-dom';
import './RegisterPage.scss';

import IntroContainer from '@components/shared/IntroContainer';
import SignUpForm from '@components/PageSignUp/SignUpForm';
import { ROUTES } from '@constants/app.constant';

const SignUpPage = () => {
  const history = useHistory();
  const redirectSignInPage = () => {
    history.push(ROUTES.SIGNIN_PAGE);
  }

  return (
    <div className={'register-page d-flex flex-column vh-100 justify-content-center align-items-center'}>
      <section className={'top-section mb-4'}>
        <IntroContainer message={'Welcome to E-com'} describe={'Create an new account'}/>
      </section>

      <SignUpForm />

      <section className={'bottom-section mt-5'}>
        <div className={'txt'}>
          Have an account?
          <span className={'txt-signin'} onClick={redirectSignInPage}> Sign In</span>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;