import React, { Component } from "react";
import { Button, Message, Image, Header, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Friends.css"

export default class FriendsCard extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });
  show = dimmer => () => this.setState({ dimmer, open: true });

  render() {
    let currentUser = sessionStorage.getItem("username");
    let myFriendsUserIds = this.props.friends
      .filter(friend => {
        if (friend.username === currentUser) {
          return true;
        } else {
          return false;
        }
      })
      .map(friend => {
        return friend;
      });
    let thisSpecificFriend;
    myFriendsUserIds.forEach(thisFriend => {
      if (thisFriend.friendname === this.props.user.username) {
        thisSpecificFriend = thisFriend.id;
      }
    });

    const { open, dimmer } = this.state;
    return (
      <React.Fragment>
        <Message key={this.props.user.id} className="card">
          <h5 className="card-title">
            <Message.Header>
              Friend's Name: {this.props.user.username}
            </Message.Header>
            <Button
              size="tiny"
              color="red"
              onClick={() =>
                this.props.deleteFriend(thisSpecificFriend, currentUser)
              }
              className="card-link"
            >
              Delete Friend
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
                  <p>This person is your friend!</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.close} positive>
                  Back
                </Button>
                <Button
                  onClick={() =>
                    this.props.deleteFriend(thisSpecificFriend, currentUser)
                  }
                  negative
                  icon="checkmark"
                  labelPosition="right"
                  content="Remove Friend"
                />
              </Modal.Actions>
            </Modal>
          </h5>
        </Message>
      </React.Fragment>
    );
  }
}
