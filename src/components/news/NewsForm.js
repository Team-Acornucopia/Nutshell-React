import React, { Component } from "react"
import { Button, Form } from "semantic-ui-react";
import "./News.css"

export default class NewsForm extends Component {
    // Set initial state
    state = {
        title: "",
        synopsis: "",
        url: "",
        date: "",
        timestamp: "",
        userId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewArticle = evt => {
        evt.preventDefault()
            const news = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                date: this.state.date,
                timestamp: new Date(),
                userId: sessionStorage.getItem("username")

        }
        this.props.addArticle(news).then(() => this.props.history.push("/news"))
    }

    render() {
        return (
            <React.Fragment>
                <Form className="NewsForm">
                    <Form.Field className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               placeholder="title" />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="url">Url</label>
                        <input type="url" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="url" placeholder="url" />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="synopsis">Synopsis</label>
                        <input type="textarea" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="synopsis"
                               placeholder="synopsis" />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="date" placeholder="date" />
                    </Form.Field>
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
                    <Button type="submit" onClick={this.constructNewArticle} className="btn btn-primary" color="green">Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}