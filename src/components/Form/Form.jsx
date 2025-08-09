import './Form.css';

import Input from '../Input/Input';
import { useContext } from 'react';
import { FormContext } from '../../providers/FormContext';

function Form() {
  const {formInput} = useContext(FormContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("formInput", formInput);
  };

  return (
    <div>
      New Form
      <form onSubmit={handleFormSubmit} noValidate>
        <div className='wrapper input-wrapper'>
          <Input id='email-input' type='text' label='email' />
        </div>
        <div className='wrapper input-wrapper'>
          <Input id='password-input' type='password' label='password' />
        </div>
        <input type='submit' />
      </form>
    </div>
  );
}

export default Form;

