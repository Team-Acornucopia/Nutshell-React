import React, { Component } from "react";
import { Button } from "semantic-ui-react"

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

  // Simplistic handler for login submit (from practice exercise)
  handleLogin = e => {
    e.preventDefault();
    /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    );
  };

  // zac's login function
  verifyUser = (event) => {
    event.preventDefault()
    let testResult;
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].username.indexOf(this.state.username) > -1) {
        // now check password
        if (this.props.users[i].password === this.state.password) {
          // log in
          // store user ID (from matching object) in session storage
          sessionStorage.setItem("userID", this.props.users[i].id);
          sessionStorage.setItem("username", this.props.users[i].username);
          // TODO: save user to session storage, hide login div, show everything else
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
    // TODO: get this in a modal or message div rather than the console
  }

  render() {
    return (
        // leaving in this form for now, but we can refactor with reactstrap forms if we have enough time
        <form onSubmit={this.verifyUser}>
        <h1 className="h3 mb-3 font-weight-normal list">Please sign in</h1>
        <label htmlFor="inputUsername">Username</label>
        <input
          onChange={this.handleFieldChange}
          type="text"
          id="username"
          placeholder="username"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword">Password</label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder="password"
          required=""
        />
        <Button class="ui button" basic color="red" type="submit">Sign in</Button>
        
      </form> 
    );
  }
}
