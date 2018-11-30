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
        // if (this.state.employee === "") {
        //     window.alert("Please select a caretaker")
        // } else {
            const messages = {
                message: this.state.message,
                date: new Date(),
                userId: sessionStorage.getItem("username")
                // employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            // }

        }
        this.props.addMessage(messages).then(() => this.props.history.push("/messages"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="message">message</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="message"
                               placeholder="message" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div> */}
                    <Button type="submit" onClick={this.constructNewMessage} className="btn btn-primary">Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}