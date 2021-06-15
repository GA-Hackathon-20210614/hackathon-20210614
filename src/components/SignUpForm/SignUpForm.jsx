import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    confirm: '',
    first_name: '',
    last_name: '',
    isTeacher: false,
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleRadio = (evt) => {
    const acctAssign = evt.target.value === "true" ? true:false
    this.setState({
      isTeacher: acctAssign,
      error: ''
    });
  };


  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />

            <label>First Name</label>
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} required />
            <label>Last Name</label>
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} required />
            <strong>Are you a teacher?</strong>
            <br />
            <label>
              <input type="radio" name="isTeacher" value="true" onChange={this.handleRadio} checked={this.state.isTeacher === true} required  />
              Yes
            </label>
            <label>
              <input type="radio" name="isTeacher" value="false" onChange={this.handleRadio} checked={this.state.isTeacher === false} required />
              No
            </label>


            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}