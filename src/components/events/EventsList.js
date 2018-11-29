import React, { Component } from 'react'
import { Link } from "react-router-dom";
import EventsCard from './EventsCard'

export default class EventsList extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="events list">
                    {
                        this.props.events.map(evt =>
                          <EventsCard key={evt.id} evt={evt} {...this.props} />
                          )
                    }
        </section>                    
      </React.Fragment>
    )
  }
}