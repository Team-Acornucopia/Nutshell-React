import React, { Component } from "react"
import { Button, Card, Image, CardHeader } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class NewsCard extends Component {
    // animalOwners(animal) {
    //     const ao = this.props.animalsOwned
    //     const own = this.props.owners
    //     const ownerNameArr = []

    //     ao.forEach(animalOwner => {
    //         if (animal.id === animalOwner.animalId) {
    //             let petOwnerId = animalOwner.ownerId
    //             own.forEach(owner => {
    //                 if (owner.id === petOwnerId) {
    //                     ownerNameArr.push(owner.name)
    //                 }
    //             })
    //         }
    //     })
    //     return ` Owner(s): ${ownerNameArr.join(" and ")}`
    // }

    render() {
        return (
            <Card.Group>
                <Card key={this.props.story.id} className="card">
                    <Card.Content className="card-body">
                        <h5 className="card-title">
                            <Card.Header>Title: {this.props.story.title}</Card.Header>
                            <Card.Header a href={`${this.props.story.url}`}>Link to This Article</Card.Header>
                            <Card.Description>Synopsis: {this.props.story.synopsis}</Card.Description>
                            <Link className="nav-link" to={`/news/${this.props.story.id}`}>Details</Link>
                            <Button color="red"
                                onClick={() => this.props.deleteArticle(this.props.story.id)}
                                className="card-link">Delete</Button>
                        </h5>
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}