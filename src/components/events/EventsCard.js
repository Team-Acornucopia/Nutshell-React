import React, { Component } from "react"
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import './Events.css'

export default class EventsCard extends Component {

  render() { 
    let prominent = ""
    if (this.props.highlight) {
      prominent="prominent card-title"
    } else {
      prominent = "card-title"
    }
      return (
          <Card.Group>

              <Card key={this.props.evt.id} className="card">
                  <Card.Content className="card-body">
                      <Card.Header className={prominent}>Event: {this.props.evt.name}</Card.Header>
                          <Card.Meta className={prominent}>Date: {this.props.evt.date} </Card.Meta>
                          <Card.Description className={prominent}>Time: {this.props.evt.time}</Card.Description>
                          <Card.Description className={prominent}>Location: {this.props.evt.location}</Card.Description>
                          <Button size="tiny" color="red"
                              onClick={() => this.props.deleteEvents(this.props.evt.id)}
                              className="card-link">Delete</Button>
                              
                          <Link className="card-link" to={`/events/edit/${this.props.evt.id}`}>Edit</Link>
                  </Card.Content>
              </Card>
          </Card.Group>
      )
  }
}