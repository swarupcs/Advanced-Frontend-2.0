import { useContext, useState } from 'react';
import { FormContext } from '../../providers/FormContext';
import  './Input.css';
function Input({ type, id, label, inputRef }) {
  const { formInput, setFormInput } = useContext(FormContext);
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true)

  return (
    <>
      <input
        className={(!isValid) ? 'error-input ' : ''}
        ref={inputRef}
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
}

export default Input;
