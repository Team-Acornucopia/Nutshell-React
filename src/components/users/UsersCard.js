import React, { Component } from "react"
import { Button, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class UsersCard extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
        return (
            <Message key={this.props.user.id} className="card">
                        <h5 className="card-title">
                            <Message.Header>Not Friend's Name: {this.props.user.username}</Message.Header>
                            <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/users/${this.props.user.id}`}>Details</Button>
                            <Button size ="tiny" color="pink"
                                onClick={() => this.props.addFriend(this.props.user.username, currentUser)}
                                className="card-link">Add Friend</Button>
                        </h5>
            </Message>
        )
    }
}