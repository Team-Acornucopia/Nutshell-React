import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class MessagesEdit extends Component {
    state = {
        message: "",
        date: "",
        userId: "",
        id: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // store the existing values in state to start
        let newState = {}
        let messages = this.props.messages.find(messages => messages.id === parseInt(this.props.match.params.messagesId))
        console.log(messages)
        newState.message = messages.message
        newState.date = messages.date
        newState.id = messages.id
        newState.userId = sessionStorage.getItem("username")

        this.setState(newState)
    }
  
    editSubmittedMessage = e => {
        e.preventDefault()
        const news = {
            message: this.state.message,
            date: this.state.date,
            userId: sessionStorage.getItem("username"),
            id: this.state.id
        }
        let messagesURL = "http://localhost:5002/messages/"
        console.log(`${messagesURL}${this.state.id}`)
        return this.props.editMessage(news, `${messagesURL}${this.state.id}`)
            .then(() => this.props.history.push("/messages"))
    }

    render() {

        return (
            <div className="container">
                <form className="editMessageForm">
                    <div className="form-group">
                        <label htmlFor="submittedMessage">Change Message</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="message" value={this.state.message} />
                    </div>
                    <Button color="green" size="tiny" type="submit" className="btn btn-primary" onClick={this.editSubmittedMessage}>Edit Message</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/messages/`}>Back</Button>
                </form>
            </div>
        );
    }
}

export default MessagesEdit