import React, { Component } from 'react';
import ApplicationViews from "./components/ApplicationViews"
import './App.css';
import NavBar from "./components/nav/NavBar"

export default class App extends Component {
  render() {
      return (
          <React.Fragment>
              <NavBar />
              <ApplicationViews />
          </React.Fragment>
      )
  }
}

