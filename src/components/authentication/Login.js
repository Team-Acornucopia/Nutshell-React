import React, { Component } from "react";
import { Button } from "semantic-ui-react";

// would like to break this into two separate pages - one for login and one for registration, but this is functional for now

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
  verifyUser = event => {
    event.preventDefault();
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
  };

  // logout function
  logout = () => {
    console.log("logout clicked")
    // clear out session storage
    sessionStorage.clear();
    // TODO: hide all divs, show login div
  };

  // zac's registration function
  registerUser = (event) => {
    event.preventDefault()
    // check database to see if user exists
    let verified = true;
    let message = "";
    for (let i = 0; i < this.props.users.length; i++) {
      // messed with this if statement - switched this.state.username and this.props.users[i].username
      // this.state.username
        if (this.props.users[i].username.indexOf(this.state.username) !== -1) {
        message = "Username already exists, please try logging in.";
        verified = false;
        break;
      } else {
        verified = true;
      }
    }
    // if user was not in database, allow registration
    if (verified) {
      message = "New user saved. Please log in.";
    
      // create an object to be saved to database
      let toSave = JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })

      console.log(toSave)
      
      // post them to the database
      

      // old way
      //   let toSave = new LoginCollection(this.state.username, this.state.password);
      //   APICollection.postUser(toSave);
    }
    console.log(message);
  };

  render() {
    return (
      // leaving in this form for now, but we can refactor with semantic UI forms if we have enough time
      <React.Fragment>
        <Button onClick={this.logout} basic color="red" type="">
            Log out
          </Button>
        <form onSubmit={this.verifyUser}>
          <h1 className="">Please sign in</h1>
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
          <Button basic color="purple" type="submit">
            Sign in
          </Button>
        </form>
        <form onSubmit={this.registerUser}>
          <h1 className="h3 mb-3 font-weight-normal list">New user registration</h1>
          <label htmlFor="newUsername">Username</label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="username"
            placeholder="desired username"
            required=""
            autoFocus=""
          />
          <label htmlFor="newPassword">Password</label>
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            placeholder="desired password"
            required=""
          />
          <Button basic color="green" type="submit">
            Register
          </Button>
        </form>
      </React.Fragment>
    );
  }
}
