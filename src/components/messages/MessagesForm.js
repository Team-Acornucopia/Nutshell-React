import React, { Component } from "react"
import { Button } from 'semantic-ui-react'

export default class NewsForm extends Component {
    // Set initial state
    state = {
        message: "",
        date: "",
        userId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = evt => {
        evt.preventDefault()
            const messages = {
                message: this.state.message,
                date: new Date(),
                userId: sessionStorage.getItem("username")
        }
        this.props.addMessage(messages).then(() => this.props.history.push("/messages"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="message"
                               placeholder="Input New Message..." />
                    </div>
                    <Button color="green" type="submit" onClick={this.constructNewMessage} className="btn btn-primary">Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}