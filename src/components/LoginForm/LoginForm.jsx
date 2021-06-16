import { useState } from 'react';
import './LoginForm.scss';
import * as usersService from '../../utilities/users-service';
import '../../pages/AuthPage/AuthPage.scss';
import Button from '@material-ui/core/Button';

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label htmlFor="email">
            Email
          </label>
             <input className="authFields" type="text" id="email" name="email" value={credentials.email} onChange={handleChange} required autoFocus />
          <label>
            Password
          </label>
            <input className="authFields" type="password" name="password" value={credentials.password} onChange={handleChange} required />
            {/* <h3>Forgot Password</h3> */}
            <Button id="login" type="submit" variant="contained">LOG IN</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}