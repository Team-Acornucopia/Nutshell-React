import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Events.css"

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
      userId: sessionStorage.getItem("username")
    };
    this.props.addEvent(events).then(() => {
      this.props.history.push("/events")
    });
  };

  render() {
    return (
      <div>
        <Form className="EventsForm">
          <Form.Field className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Input Event Name Here..." />
          </Form.Field>
          <Form.Field className="form-group">
            <label htmlFor="date">Select Event Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              placeholder="Choose Event Date Here..."
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label htmlFor="time">Select Event Time</label>
            <input
              type="time"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="time"
              placeholder="Choose Event Time Here..."
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              placeholder="Input Event Location Here..."
            />
          </Form.Field>
          <Button
            type="submit"
            onClick={this.constructNewEvent}
            className="btn btn-primary"
            color="green"
            content="Submit" />
        </Form>
      </div>
    )
  }
}