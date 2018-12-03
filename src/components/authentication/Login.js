import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import UserManager from "../../managers/UserManager";
import { Link } from "react-router-dom";

// would like to break this into two separate pages - one for login and one for registration, but this is functional for now
// write a function to clear fields after submit pressed
// get messages out of console and on to page

export default class Login extends Component {
  // Set initial state
  state = {
    username: "",
    password: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // function to clear all the fields on the page
  clearFields = e => {
    this.refs.userField.value = "";
    this.refs.passField.value = "";
    this.refs.newUserField.value = "";
    this.refs.newPassField.value = "";
  };

  // clearFields using getElementById
  clearFields2 = e => {
    this.signIn.reset();
  };

  // zac's login function
  verifyUser = event => {
    event.preventDefault();
    let testResult;
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].username.indexOf(this.state.username) > -1) {
        // now check password
        if (this.props.users[i].password === this.state.password) {
          // log in: store user ID (from matching object) in session storage
          sessionStorage.setItem("userID", this.props.users[i].id);
          sessionStorage.setItem("username", this.props.users[i].username);
          testResult = "You are logged in!";
          break;
        } else {
          testResult = "Your password does not match. Please try again.";
          break;
        }
      } else {
        testResult = "No username found. Please register a new account.";
      }
    }
    // tell the user the result of the test
    console.log(testResult);
    // this.clearFields2();
  };

  // zac's logout function
  logout = () => {
    console.log("logout clicked");
    // clear out session storage
    sessionStorage.clear();
  };

  render() {
    return (
      // leaving in this basic form for now, but we can refactor with multiple semantic UI forms if we have enough time
      <React.Fragment>
        <form ref="signIn" onSubmit={this.verifyUser}>
          <h1 className="">Please sign in</h1>
          <label htmlFor="inputUsername">Username</label>
          <Form.Input
            onChange={this.handleFieldChange}
            type="text"
            id="username"
            placeholder="username"
            required=""
            autoFocus=""
            // ref="userField"
          />
          <label htmlFor="inputPassword">Password</label>
          <Form.Input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            placeholder="password"
            required=""
            // ref="passField"
          />

          <Button basic color="purple" type="submit">
            Sign in
          </Button>
        </form>
        <Button as={Link} size="tiny" color="black" className="card-link" to={`/register/`}>Need To Register? Click here.</Button>
      </React.Fragment>
    );
  }
}
