import React, { Component } from 'react'
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard"
import { Button } from 'semantic-ui-react'
import "./News.css"

export default class NewsList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="newsButton">
                    <Button color="green" type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/news/new")
                        }
                        }>
                        New Article
                    </Button>
                </section>
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