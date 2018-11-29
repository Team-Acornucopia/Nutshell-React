import React, { Component } from 'react'
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard"

export default class NewsList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="news list">
                    {
                        this.props.news.map(story =>
                            <NewsCard key={story.id} story={story} deleteArticle={this.props.deleteArticle}{...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}