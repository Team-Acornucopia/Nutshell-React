import React, { Component } from "react"
import { Button, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
// import "./FriendsMessages.css"
import "./Messages.css"

export default class FriendsMessages extends Component {
    
    render() {
        return (
          <div className="othersMessageContainer">
            <Message key={this.props.message.id} className="friendsMessageCards">
                <h5 className="card-title">
                    <Message.Header>{this.props.message.userId}</Message.Header>
                    <p>{this.props.message.message}</p>
                    <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/messages/${this.props.message.id}`}>Details</Button>
                    {/* View Friend Link Here */}
                </h5>
            </Message>
          </div>
        )
    }
}