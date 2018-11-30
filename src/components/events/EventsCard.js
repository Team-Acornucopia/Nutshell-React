import React, { Component } from "react"
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class EventsCard extends Component {

state = {
  editedEventName: "",
  // date: "",
  // time: "",
  editedEventLocation: ""
}

handleFieldChange = evt => {
  console.log(evt.target.value)
  const stateToChange = {}
  stateToChange[evt.target.id] = evt.target.value
  this.setState(stateToChange)
}

constructEditedEvent = () => {
  //This is the new object that will be patched into the database.
  const newEvent = {
    name: this.state.editedEventName,
    // date: this.props.state.taskDate,
    location: this.state.editedEventLocation
  }
  //This goes back to application views where it gets the editTask function.
  //the this.props.thing.id looks at the key
  this.props.editEvent(newEvent, this.props.evt.id)
}




  render() {
      return (
          <Card.Group>

              <Card key={this.props.evt.id} className="card">
                  <Card.Content className="card-body">
                      <Card.Header className="card-title">Event: {this.props.evt.name}</Card.Header>
                        <input type="text" placeholder="Edit Event" id="editedEventName" onChange={this.handleFieldChange}></input>
                          <Card.Meta>Date: {this.props.evt.date}</Card.Meta>
                          <Card.Description>Time: {this.props.evt.time}</Card.Description>
                          <Card.Description>Location: {this.props.evt.location}</Card.Description>
                          <input type="text" placeholder="Edit Location" id="editedEventLocation" onChange={this.handleFieldChange}></input>
                          <br></br>
                          <Button size="tiny" color="red"
                              onClick={() => this.props.deleteEvents(this.props.evt.id)}
                              className="card-link">Delete</Button>
                          <Button size="tiny" color="blue"
                              onClick={this.constructEditedEvent}
                              className="card-link">Edit</Button>
                  </Card.Content>
              </Card>
          </Card.Group>
      )
  }
}