import React, { Component } from "react"
import { Button } from 'semantic-ui-react'

export default class EventsForm extends Component {
    // Set initial state
    state = {
        name: "",
        date: "",
        time: "",
        location: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewEvent = evt => {
        evt.preventDefault()
        // if (this.state.employee === "") {
        //     window.alert("Please select a caretaker")
        // } else {
            const events = {
                name: this.state.name,
                date: this.state.date,
                time: this.state.time,
                location: this.state.location
                // employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            // }

        }
        this.props.addArticle(news).then(() => this.props.history.push("/news"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="newsForm">
                    <div className="form-group">
                        <label htmlFor="title">title</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               placeholder="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">url</label>
                        <input type="url" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="url" placeholder="url" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="synopsis">synopsis</label>
                        <input type="textarea" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="synopsis"
                               placeholder="synopsis" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">date</label>
                        <input type="date" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="date" placeholder="date" />
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
                    <Button type="submit" onClick={this.constructNewEvent} className="btn btn-primary">Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}