import React, { Component } from 'react'
import MessagesCard from "./MessagesCard"
import MessagesCard2 from "./MessagesCard2"
import { Button } from 'semantic-ui-react'

export default class MessagesList extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
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
            this.props.messages.map(message => {
              if (message.userId === currentUser) {
                return <MessagesCard key={message.id} message={message} deleteMessage={this.props.deleteMessage}{...this.props} />
              } else {
                return <MessagesCard2 key={message.id} message={message} {...this.props} />
              }
            })
          }
                </section>
            </React.Fragment>
        )
    }
}