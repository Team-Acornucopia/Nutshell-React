import React, { Component } from "react";
import { Button, Message, Image, Header, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class FriendsCard extends Component {
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
    return (
      <React.Fragment>
        <Message key={this.props.user.id} className="card">
          <h5 className="card-title">
            <Message.Header>
              Friend's Name: {this.props.user.username}
            </Message.Header>
            <Button
              as={Link}
              size="tiny"
              color="purple"
              className="nav-link"
              to={`/friends/${this.props.user.id}`}
            >
              Details
            </Button>
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
          </h5>
        </Message>
      </React.Fragment>
    );
  }
}
