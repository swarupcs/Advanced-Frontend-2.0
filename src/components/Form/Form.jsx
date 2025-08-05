import { useState } from 'react';
import './Form.css';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';

function Form() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleValidatePassword = () => {
    const password = formValues.password;
    if(!validatePassword(password)) {
    console.log("password doesnot contain all required characters");
  }
}

const handleValidateEmail = () => {
    const email = formValues.email;
    // Assuming you have a validateEmail function similar to validatePassword
    if (!validateEmail(email)) {
      console.log("Invalid email format");
    }
  }

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
            type='text'
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          />
        </div>
        <div className='wrapper input-wrapper'>
          <input
            type='password'
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
