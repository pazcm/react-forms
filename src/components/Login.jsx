import { useState } from 'react';

export default function Login() {
  // combine states to stored all state values in one object
  const [enteredValues, setEnteredValues]= useState({
    email: '',
    password: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('email: ' + enteredEmail + '\n' + 'pass: ' + enteredPassword);
    console.log(enteredValues);

  }

  // email/pass key is stored in this handler as 'identifier'
  function handInputChange(identifier, value) {
    setEnteredValues(prevValues => ({ // get previous snapshot and return and objet{with my keys}:
      ...prevValues, // paste my existing key value pairs, and update the field with the 'identifier'
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onChange={(event) => handInputChange('email', event.target.value)}
          value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password"
          onChange={(event) => handInputChange('password', event.target.value)}
          value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type='submit'>Login</button>
      </p>
    </form>
  );
}
