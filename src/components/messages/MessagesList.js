import React, { Component } from 'react'
// import { Link } from "react-router-dom";

export default class MessagesList extends Component {
    render() {
      console.log(this.props.messages)
        return (
            <React.Fragment>
                {
                    this.props.messages.map(message =>
                        <div key={message.id}>
                            <h1>{message.userId}</h1>
                            <p>{message.message}</p>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}