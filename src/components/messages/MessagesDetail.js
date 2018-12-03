import React, { Component } from "react"

export default class MessagesDetail extends Component {
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

        const messages = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messagesId)) || {}
        return (
            <section className="messages details">
                <div key={messages.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h1>Title: {messages.title}</h1>
                            <h2>URL: {messages.url}</h2>
                            <p>Synopsis: {messages.synopsis}</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}