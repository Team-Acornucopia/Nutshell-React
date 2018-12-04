import React, { Component } from "react"
import { Button, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class MessagesCard extends Component {
    render() {
        return (
            <Message key={this.props.friend.id} className="card">
                        <h5 className="card-title">
                            <Message.Header>Friend Name: {this.props.friend.friendname}</Message.Header>
                            {/* <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/messages/${this.props.message.id}`}>Details</Button>
                            <Button as={Link} size ="tiny" color="orange" className="card-link" to={`/messages/edit/${this.props.message.id}`}>Edit</Button> */}
                            <Button size ="tiny" color="red"
                                onClick={() => this.props.deleteFriend(this.props.friend.id)}
                                className="card-link">Delete Friend</Button>
                        </h5>
            </Message>
        )
    }
}