import React, { Component } from 'react';
import ApplicationViews from "./components/ApplicationViews"
import './App.css';

export default class App extends Component {
  render() {
      return (
          <React.Fragment>
              {/* <NavBar /> */}
              <ApplicationViews />
          </React.Fragment>
      )
  }
}

