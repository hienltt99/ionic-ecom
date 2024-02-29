import { useHistory } from 'react-router-dom';
import './LoginPage.scss';

import IntroContainer from '@components/shared/IntroContainer';
import SignInForm from '@components/PageSignIn/SignInForm';
import { ROUTES } from '@constants/app.constant';

const SignInPage = () => {
  const history = useHistory();
  const redirectSignUpPage = () => {
    history.push(ROUTES.SIGNUP_PAGE);
  }

  return (
    <div className={'login-page d-flex flex-column vh-100 justify-content-center align-items-center'}>
      <section className={'top-section mb-4'}>
        <IntroContainer message={'Welcome to E-com'} describe={'Sign in to continue'}/>
      </section>

      <SignInForm />

      {/*TODO: section login with a 3rd party*/}

      <section className={'bottom-section mt-5'}>
        <div className={'txt-forgot-pass'}>Forgot Password?</div>
        <div className={'txt'}>
          Don't have an account?
          <span className={'txt-register'} onClick={redirectSignUpPage}> Register</span>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;