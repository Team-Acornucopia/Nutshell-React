import React, { Component } from 'react'
import NewsCard from "./NewsCard"
import { Button } from 'semantic-ui-react'
import "./News.css"

export default class NewsList extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
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
                        this.props.news.map(story =>  {   
                            if(story.userId === currentUser) {
                                return <NewsCard key={story.id} story={story} deleteArticle={this.props.deleteArticle}{...this.props} />
                            } else {
                                return null
                            }
                        })
                    }
                </section>
            </React.Fragment>
        )
    }
}