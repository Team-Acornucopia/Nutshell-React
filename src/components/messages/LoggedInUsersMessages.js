import React, { Component } from "react";
import { Button, Message, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./LoggedInUsersMessages.css";

export default class LoggedInUsersMessages extends Component {
  
  
    render() {
    return (
      <Card.Group>
        <Card key={this.props.message.id} className="loggedInUsersMessage">
          <h5 className="card-title">
            <Card.Header>{this.props.message.userId}</Card.Header>
            {/* <Image
                  wrapped
                  size="small"
                  src={}
                /> */}
            <p>{this.props.message.message}</p>
            <Button
              as={Link}
              size="tiny"
              color="purple"
              className="nav-link"
              to={`/messages/${this.props.message.id}`}
            >
              Details
            </Button>
            <Button
              as={Link}
              size="tiny"
              color="orange"
              className="card-link"
              to={`/messages/edit/${this.props.message.id}`}
            >
              Edit
            </Button>
            <Button
              size="tiny"
              color="red"
              onClick={() => this.props.deleteMessage(this.props.message.id)}
              className="card-link"
            >
              Delete
            </Button>
          </h5>
        </Card>
      </Card.Group>
    );
  }
}
