import React, { Component } from "react";
import { Button, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Messages.css";

export default class FriendsMessages extends Component {
  render() {
    return (
      <Card.Group className="othersMessageContainer">
        <Card key={this.props.message.id} className="friendsMessageCards">
          <h5 className="card-title">
            <Card.Header>{this.props.message.userId}</Card.Header>
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
            {/* View Friend Link Here */}
          </h5>
        </Card>
      </Card.Group>
    );
  }
}
