import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class EventsForm extends Component {
  // Set initial state
  state = {
    name: "",
    date: "",
    time: "",
    location: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewEvent = evt => {
    evt.preventDefault();
    const events = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      userId: sessionStorage.getItem(“username”)
    };
    this.props.addEvent(events).then(() => this.props.history.push("/events"));
  };

  render() {
    return (
      <div>
        <form className="EventsForm">
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="name of event" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              placeholder="date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="time"
              placeholder="time"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="location"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              placeholder="location"
            />
          </div>
          <Button
            type="submit"
            onClick={this.constructNewEvent}
            className="btn btn-primary"
            content="Submit" />
        </form>
      </div>
    )
  }
}
