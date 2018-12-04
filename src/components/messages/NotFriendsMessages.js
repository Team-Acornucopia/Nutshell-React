import React, { Component } from "react"
import { Button, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import "./Messages.css"

export default class NotFriendsMessages extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
        return (
          <div className="othersMessageContainer">
            <Message key={this.props.message.id} className="notFriendsMessageCards">
                <h5 className="card-title">
                    <Message.Header>{this.props.message.userId}</Message.Header>
                    <p>{this.props.message.message}</p>
                    <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/messages/${this.props.message.id}`}>Details</Button>
                    <Button size="tiny" color="pink"
                        onClick={() => this.props.addFriend(this.props.message.userId, currentUser)}
                        className="card-link">Add Friend</Button>
                </h5>
            </Message>
          </div>
        )
    }
}