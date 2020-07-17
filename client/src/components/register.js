import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
import logo from "../logo.svg"
import axios from 'axios';

class Register extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  resetUserInputs = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault()

    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    console.log(payload)

    axios.post("api/signup", payload)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
      })
  }


  render() {
    return (
      <div className="container h-100">
        <div className= "d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="logo"></img>
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form className="signup">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text" 
                  className="form-control" 
                  placeholder="First Name">

                  </input>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                  value={this.state.lastName} 
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text" 
                  className="form-control" 
                  placeholder="Last Name">

                  </input>
                </div>
                <div className="form-group">
                  <label>Email Address (Username)</label>
                  <input 
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="email" 
                  className="form-control" 
                  placeholder="Email">

                  </input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                  value={this.state.password} 
                  name="password"
                  onChange={this.handleInputChange}
                  type="password" 
                  className="form-control" 
                  placeholder="Password">

                  </input>
                </div>
                <button onClick={this.handleFormSubmit} className="btn btn-primary login_btn">Sign Up</button>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Have an account? <a href="/login" className="ml-2"></a>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Register;