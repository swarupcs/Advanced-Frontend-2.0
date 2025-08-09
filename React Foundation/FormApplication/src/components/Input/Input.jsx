import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { FormContext } from '../../providers/FormContext';
import './Input.css';
const Input = React.forwardRef(({ type, id, label, checkOnBlur }, ref) => {
  const { formInput, setFormInput } = useContext(FormContext);
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [shake, setShake] = useState(false);

  // Introduce a local ref
  const localRef = useRef(null);

  useEffect(() => {
    setIsValid(true);
    setShake(false);
  }, [text]);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => localRef.current.focus(),
        setInvalid: () => setIsValid(false),
        shake: () => setShake(true),
      };
    },
    []
  );

  return (
    <>
      <input
        className={`${!isValid ? 'error-input' : ''} ${shake ? 'shake' : ''} `}
        ref={localRef}
        type={type}
        onBlur={checkOnBlur}
        id={id}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setFormInput({ ...formInput, [label]: e.target.value });
        }}
      />
      <br />
      <span> {!isValid ? `${label} is invalid` : ''}</span>
    </>
  );
});

export default Input;
