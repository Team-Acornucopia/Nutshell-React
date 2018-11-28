import React, { Component } from 'react'
// import { Link } from "react-router-dom";

export default class NewsList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.news.map(pizza =>
                        <div key={pizza.id}>
                            <h1>{pizza.title}</h1>
                            <p>{pizza.synopsis}</p>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}