import './Form.css';

import Input from '../Input/Input';
import { useContext, useRef } from 'react';
import { FormContext } from '../../providers/FormContext';
import validateEmail from '../../helper/emailValidator';
import validatePassword from '../../helper/passwordValidator';

function Form() {
  const { formInput } = useContext(FormContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleInvalidEmail();
    handleInvalidPassword();
  };

  const handleInvalidEmail = () => {
    if (!validateEmail(formInput.email)) {
      emailRef.current.setInvalid();
      emailRef.current.shake();
    }
  };

  const handleInvalidPassword = () => {
    if (!validatePassword(formInput.password)) {
      passwordRef.current.setInvalid();
      passwordRef.current.shake();
    }
  };

  return (
    <div>
      New Form
      <form onSubmit={handleFormSubmit} noValidate>
        <div className='wrapper input-wrapper'>
          <Input
            id='email-input'
            type='text'
            label='email'
            ref={emailRef}
            checkOnBlur={handleInvalidEmail}
          />
        </div>
        <div className='wrapper input-wrapper'>
          <Input
            id='password-input'
            type='password'
            label='password'
            ref={passwordRef}
            checkOnBlur={handleInvalidPassword}
          />
        </div>
        <input type='submit' />
      </form>
    </div>
  );
}

export default Form;
