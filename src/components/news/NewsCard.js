import React, { Component } from "react"
import { Button, Card, Image, CardHeader } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class NewsCard extends Component {
    render() {
        return (
            <Card.Group>
                <Card key={this.props.story.id} className="card">
                    <Card.Content className="card-body">
                        <h5 className="card-title">
                            <Card.Header>Title: {this.props.story.title}</Card.Header>
                            <Card.Header a href={`${this.props.story.url}`}>Link to This Article</Card.Header>
                            <Card.Description>Synopsis: {this.props.story.synopsis}</Card.Description>
                            <Button as={Link} size="tiny" color="purple" className="nav-link" to={`/news/${this.props.story.id}`}>Details</Button>
                            <Button as={Link} size="tiny" color="orange" className="card-link" to={`/news/edit/${this.props.story.id}`}>Edit</Button>
                            <Button size="tiny" color="red"
                                onClick={() => this.props.deleteArticle(this.props.story.id)}
                                className="card-link">Delete</Button>
                        </h5>
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}