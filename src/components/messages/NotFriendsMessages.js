import React, { Component } from "react";
import { Button, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Messages.css";

export default class NotFriendsMessages extends Component {
  render() {
    let currentUser = sessionStorage.getItem("username");
    return (
      <Card.Group className="othersMessageContainer">
        <Card key={this.props.message.id} className="notFriendsMessage">
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
            <Button
              size="tiny"
              color="pink"
              onClick={() =>
                this.props.addFriend(this.props.message.userId, currentUser)
              }
              className="card-link"
            >
              Add Friend
            </Button>
          </h5>
        </Card>
      </Card.Group>
    );
  }
}
