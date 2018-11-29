import React, { Component } from "react";

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

  // Simplistic handler for login submit
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

  verifyUser(array, un, pw) {
    // declare variable to hold result from checking
    let testResult;
    for (let i = 0; i < array.length; i++) {
      if (array[i].username.indexOf(un) > -1) {
        // now check password
        if (array[i].password === pw) {
          // log in
          // store user ID (from matching object) in session storage
          sessionStorage.setItem("userID", array[i].id);
          sessionStorage.setItem("username", array[i].username);
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
  }

  verifyUser2 = (event) => {
    // declare variable to hold result from checking
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
  }

  render() {
    return (
        // this was just to confirm that users were coming thru - it works
        // {this.props.users.map(user => (
        //   <div key={user.id}>
        //     <h1>{user.username}</h1>
        //   </div>
        // ))}
        <form onSubmit={this.verifyUser2}>
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
        <button type="submit">Sign in</button>
      </form> 
    );
  }
}
