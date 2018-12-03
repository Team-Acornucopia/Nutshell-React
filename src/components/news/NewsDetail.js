import React, { Component } from "react"
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class NewsDetail extends Component {
    render() {

        const news = this.props.news.find(a => a.id === parseInt(this.props.match.params.newsId)) || {}
        return (
            <section className="news details">
                <div key={news.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h1>Title: {news.title}</h1>
                            <h2>URL: {news.url}</h2>
                            <p>Synopsis: {news.synopsis}</p>
                            <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/news/`}>Back</Button>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}