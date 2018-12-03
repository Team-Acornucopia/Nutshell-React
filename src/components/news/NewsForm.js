import React, { Component } from "react"
import { Button } from 'semantic-ui-react'

export default class NewsForm extends Component {
    // Set initial state
    state = {
        title: "",
        synopsis: "",
        url: "",
        date: "",
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
                userId: sessionStorage.getItem("username")

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
                    <Button type="submit" onClick={this.constructNewArticle} className="btn btn-primary">Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}