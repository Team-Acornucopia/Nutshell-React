import React, { Component } from "react";
import { Button, Message, Image, Modal, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class UsersCard extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });
  show = dimmer => () => this.setState({ dimmer, open: true });

  render() {
    let currentUser = sessionStorage.getItem("username");

    const { open, dimmer } = this.state;
    return (
      <Message key={this.props.user.id} className="card">
        <h5 className="card-title">
          <Message.Header>
            Not Friend's Name: {this.props.user.username}
          </Message.Header>
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
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
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
                icon="checkmark"
                labelPosition="right"
                content="Add Friend"
              />
            </Modal.Actions>
          </Modal>
        </h5>
      </Message>
    );
  }
}
