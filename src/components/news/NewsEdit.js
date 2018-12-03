import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
class NewsEdit extends Component {
    state = {
        title: "",
        synopsis: "",
        url: "",
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
        let news = this.props.news.find(news => news.id === parseInt(this.props.match.params.newsId))
        console.log(news)
        newState.title = news.title
        newState.synopsis = news.synopsis
        newState.url = news.url
        newState.date = news.date
        newState.id = news.id
        newState.userId = sessionStorage.getItem("username")

        this.setState(newState)
    }
  
    editSubmittedArticle = e => {
        // prepare objects for editing database
        e.preventDefault()
        const news = {
            title: this.state.title,
            synopsis: this.state.synopsis,
            url: this.state.url,
            date: this.state.date,
            userId: sessionStorage.getItem("username"),
            id: this.state.id
        }
        let newsURL = "http://localhost:5002/news/"
        console.log(`${newsURL}${this.state.id}`)
        return this.props.editArticle(news, `${newsURL}${this.state.id}`)
            .then(() => this.props.history.push("/news"))
    }

    render() {
        return (
            <div className="container">
                <form className="editArticleForm">
                    <div className="form-group">
                        <label htmlFor="articleTitle">Change Article Title</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="title" value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleSynopsis">Change Article Synopsis</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="synopsis" value={this.state.synopsis} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleURL">Change Article URL</label>
                        <input type="url" required className="form-control" onChange={this.handleFieldChange} id="url" value={this.state.url} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleDate">Change Article Date</label>
                        <input type="date" required className="form-control" onChange={this.handleFieldChange} id="date" value={this.state.date} />
                    </div>

                    <Button type="submit" size="tiny" color="green" className="btn btn-primary" onClick={this.editSubmittedArticle}>Edit Article</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/news/`}>Back</Button>

                </form>
            </div>
        );
    }
}

export default NewsEdit