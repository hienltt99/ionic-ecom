import './style.scss';
import { ICONS } from '@assets';
import { useState } from 'react';

const inputs = [
  {
    type: 'text',
    name: 'fullname',
    label: 'Full Name',
    icon: ICONS.ICON_USER,
  },
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
  {
    type: 'password',
    name: 'repassword',
    label: 'Password Again',
    icon: ICONS.ICON_LOCK,
  },
]


const SignUpForm = () => {
  const [inputFocus, setInputFocus] = useState('');

  const handleFocus = (event) => {
    setInputFocus(event.target.name);
  }
  
  const handleBlur = () => {
    setInputFocus('');
  }

  const checkInputFocus = (inputName) => {
    if (inputFocus === inputName) return 'focus';
    return '';
  }
  
  return (
    <div className={'register-form'}>
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
        <button className={'btn btn-signup'}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUpForm;