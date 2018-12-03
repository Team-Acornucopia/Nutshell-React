import React, { Component } from "react"
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class EventsDetails extends Component {
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

        const events = this.props.events.find(a => a.id === parseInt(this.props.match.params.eventsId)) || {}
        return (
            <section className="events details">
                <div key={events.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h1>Name: {events.name}</h1>
                            <h2>Date: {events.date}</h2>
                            <h2>Location: {events.location}</h2>
                            <p>Time: {events.time}</p>
                            <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/events/`}>Back</Button>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}