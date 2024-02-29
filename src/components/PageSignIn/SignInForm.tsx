import './style.scss';
import { ICONS } from '@assets';
import { BaseSyntheticEvent, useContext, useState } from 'react';
import { AuthContext } from '@providers/AuthProvider';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '@constants/app.constant';

const inputs = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    icon: ICONS.ICON_MAIL,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    icon: ICONS.ICON_LOCK,
  },
]

const SignInForm = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const [inputFocus, setInputFocus] = useState('');

  const handleSignIn = () => {
    login().then(() => {
      history.push(ROUTES.APP);
    })
  }

  const handleFocus = (event: BaseSyntheticEvent) => {
    setInputFocus(event.target.name);
  }

  const handleBlur = () => {
    setInputFocus('');
  }

  const checkInputFocus = (inputName: string) => {
    if (inputFocus === inputName) return 'focus';
    return '';
  }

  return (
    <div className={'login-form'}>
      {inputs.map(input => (
        <div key={input.name} className="position-relative mb-3">
          <img className={`input-group-icon ${checkInputFocus(input.name)}`} src={input.icon} alt=""/>
          <input
            type={input.type}
            className="form-control"
            name={input.name}
            placeholder={input.label}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      ))}

      <div className="input-group flex-nowrap">
        <button className={'btn btn-signin'} onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  )
}

export default SignInForm;