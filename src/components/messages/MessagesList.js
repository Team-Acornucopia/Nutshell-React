import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MessagesCard from "./MessagesCard"
import { Button } from 'semantic-ui-react'

export default class MessagesList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="messagesButton">
                    <Button color="green" type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/messages/new")}}>New Message
                    </Button>
                </section>
                <section className="messages list">
                    {
                        this.props.messages.map(message =>
                            <MessagesCard key={message.id} message={message} deleteMessage={this.props.deleteMessage}{...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}