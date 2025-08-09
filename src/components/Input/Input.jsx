import React, { useContext, useState } from 'react';
import { FormContext } from '../../providers/FormContext';
import  './Input.css';
const Input = React.forwardRef(({ type, id, label }, ref) => {
  const { formInput, setFormInput } = useContext(FormContext);
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true)

  return (
    <>
      <input
        className={(!isValid) ? 'error-input ' : ''}
        ref={ref}
        type={type}
        id={id}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setFormInput({ ...formInput, [label]: e.target.value });
        }}
      />
    </>
  );
});

export default Input;
