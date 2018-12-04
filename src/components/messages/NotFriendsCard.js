import React, { Component } from "react"
import { Button, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class NotFriendsCard extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
        return (
            <Message className="card">
                <h5 className="card-title">
                    <Message.Header>{this.props.message.userId}</Message.Header>
                    <p>{this.props.message.message}</p>
                    <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/messages/${this.props.message.id}`}>Details</Button>
                    <Button size="tiny" color="pink"
                        onClick={() => this.props.addFriend(this.props.message.userId, currentUser)}
                        className="card-link">Add Friend</Button>
                </h5>
            </Message>
        )
    }
}