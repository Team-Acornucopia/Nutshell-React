import React, { Component } from 'react'
import NewsCard from "./NewsCard"
import FriendsNewsCard from "./FriendsNewsCard"
import { Button } from 'semantic-ui-react'

export default class NewsList extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
        let myFriendsUserNames = this.props.friends.filter(friend => {
            if(friend.username === currentUser) {
                return true
            } else {
                return false
            }
        }).map(friend => {
            return friend.friendname
        })
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
                            if (story.userId === currentUser) {
                                return <NewsCard key={story.id} story={story} deleteArticle={this.props.deleteArticle}{...this.props} />
                            } else if (myFriendsUserNames.includes(story.userId)) {
                                return <FriendsNewsCard key={story.id} story={story} deleteArticle={this.props.deleteArticle}{...this.props} />
                            }
                        })
                    }
                </section>
            </React.Fragment>
        )
    }
}