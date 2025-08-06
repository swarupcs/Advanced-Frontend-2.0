import { useRef, useState } from 'react';
import './Form.css';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';

function Form() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleValidatePassword = () => {
    const password = formValues.password;
    if (!validatePassword(password)) {
      passwordRef.current.focus();
      console.log('password doesnot contain all required characters');
    }
  };

  const handleValidateEmail = () => {
    const email = formValues.email;
    // Assuming you have a validateEmail function similar to validatePassword
    if (!validateEmail(email)) {
      emailRef.current.focus();
      console.log('Invalid email format');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleValidateEmail();
    handleValidatePassword();
  };

  return (
    <div>
      New Form
      <form onSubmit={handleFormSubmit}>
        <div className='wrapper input-wrapper'>
          <input
            id='email-input'
            type='text'
            value={formValues.email}
            ref={emailRef}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          />
        </div>
        <div className='wrapper input-wrapper'>
          <input
            id='password-input'
            type='password'
            ref={passwordRef}
            value={formValues.password}
            onChange={(event) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
          />
        </div>
        <input type='submit' />
      </form>
    </div>
  );
}

export default Form;
