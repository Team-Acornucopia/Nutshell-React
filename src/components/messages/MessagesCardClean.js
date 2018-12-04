import React, { Component } from "react"
import { Button, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class MessagesCardClean extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username");
        
        return (
            // this.props.friends.map(friend => {
            <Message key={this.props.message.id} className="card">
                <h5 className="card-title">
                    <Message.Header>{this.props.message.userId}</Message.Header>
                    <p>{this.props.message.message}</p>
                    <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/messages/${this.props.message.id}`}>Details</Button>
                    {this.props.message.userId === currentUser ?
                        <React.Fragment>
                            <Button as={Link} size="tiny" color="orange" className="card-link" to={`/messages/edit/${this.props.message.id}`}>Edit</Button>
                            <Button size="tiny" color="red"
                                onClick={() => this.props.deleteMessage(this.props.message.id)}
                                className="card-link">Delete</Button>
                        </React.Fragment> : null
                    }
                    {
                        this.props.friends.map(friend => {
                        return this.props.message.userId !== friend.username && this.props.message.userId !== friend.friendname && this.props.message.userId !== currentUser ?
                            <Button size="tiny" color="pink"
                                onClick={() => this.props.addFriend(this.props.friend.id)}
                                className="card-link">Add Friend</Button> : null
                    }
                    )}
                </h5>
            </Message>
            // })
        )
    }
}