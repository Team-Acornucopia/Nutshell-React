import React, { Component } from "react"
import { Button, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class LoggedInUsersCard extends Component {
    render() {
        return (
            <Message className="card">
                <h5 className="card-title">
                    <Message.Header>{this.props.message.userId}</Message.Header>
                    <p>{this.props.message.message}</p>
                    <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/messages/${this.props.message.id}`}>Details</Button>
                    <Button as={Link} size="tiny" color="orange" className="card-link" to={`/messages/edit/${this.props.message.id}`}>Edit</Button>
                            <Button size="tiny" color="red"
                                onClick={() => this.props.deleteMessage(this.props.message.id)}
                                className="card-link">Delete</Button>
                </h5>
            </Message>
        )
    }
}

