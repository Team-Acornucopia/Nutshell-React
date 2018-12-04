import React, { Component } from "react";
import { Button, Message, Image, Modal, Header, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./UsersCard.css"
import "./Friends.css";
export default class UsersCard extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });
  show = dimmer => () => this.setState({ dimmer, open: true });

  render() {
    let currentUser = sessionStorage.getItem("username");

    const { open, dimmer } = this.state;
    return (
      <Card.Group className="usersCard">
        <Card color='red' key={this.props.user.id} className="card">
          <h5 className="card-title">
            <Image
              floated="right"
              size="mini"
              src={this.props.user.avatar}
            />
            <Card.Header>{this.props.user.username}</Card.Header>
            <Card.Meta>You are not currently friends.</Card.Meta>
            <Button
              size="tiny"
              color="green"
              onClick={() =>
                this.props.addFriend(this.props.user.username, currentUser)
              }
              className="card-link"
            >
              Add Friend
            </Button>
            <Modal
              dimmer={dimmer}
              open={open}
              onClose={this.close}
              trigger={
                <Button size="tiny" color="purple" onClick={this.show(true)}>
                  Details
                </Button>
              }
            >
              <Modal.Header>Details</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="small"
                  src={this.props.user.avatar}
                />
                <Modal.Description>
                  <Header>{this.props.user.username}</Header>
                  <p>This person isn't your friend...</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.close} negative>
                  Back
                </Button>
                <Button
                  onClick={() =>
                    this.props.addFriend(this.props.user.username, currentUser)
                  }
                  positive
                  icon="add user"
                  labelPosition="right"
                  content="Add Friend"
                />
              </Modal.Actions>
            </Modal>
          </h5>
        </Card>
      </Card.Group>
    );
  }
}
