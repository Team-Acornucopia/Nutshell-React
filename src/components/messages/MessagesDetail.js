import React, { Component } from "react"
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class MessagesDetail extends Component {
    render() {
        const messages = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messagesId)) || {}
        return (
            <section className="messages details">
                <div key={messages.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h1>User: {messages.userId}</h1>
                            <h2>Message: {messages.message}</h2>
                            <p>Date: {messages.date}</p>
                            <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/messages/`}>Back</Button>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}