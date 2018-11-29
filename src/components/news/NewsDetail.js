import React, { Component } from "react"

export default class NewsDetail extends Component {
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

        const news = this.props.news.find(a => a.id === parseInt(this.props.match.params.newsId)) || {}
        return (
            <section className="news details">
                <div key={news.id} className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            <h4>Title: {news.title}</h4>
                            <p>Synopsis: {news.synopsis}</p>
                        </h3>
                        
                    </div>
                </div>
            </section>
        )
    }
}