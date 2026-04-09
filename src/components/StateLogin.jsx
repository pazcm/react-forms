import { useState } from 'react';
import Input from './Input.jsx'

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  //(input validation) when lost focus --> the error message comes up
  const emailIsInvalid =
    didEdit.email && !enteredValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
  }

  // field changes
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false, // will reset the edit state here, so the user doesn't see the error message when is editing again
    }))
  }

  // field lose focus
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Testing State Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email" 
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email} />

          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address here</p>}
          </div>

        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password"
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password} />
    </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}