import React, { Component } from "react";
import { Button, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Messages.css";

export default class FriendsMessages extends Component {
  render() {
    return (
      <Card.Group className="othersMessageContainer">
        <Card fluid key={this.props.message.id} className="friendsMessageCards">
          <h5 className="card-title">
            <Card.Header>{this.props.message.userId} said: {this.props.message.message}</Card.Header>
            <br />
            <Card.Meta>You are friends!</Card.Meta>
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
