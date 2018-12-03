import React, { Component } from "react";
import EventsCard from "./EventsCard";
import { Button } from 'semantic-ui-react'

export default class EventsList extends Component {
  render() {
    let currentUser = sessionStorage.getItem("username")
    return (
      <React.Fragment>
        <section className="eventsButton">
          <Button
            color="green"
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            New Event
          </Button>
        </section>
        <section className="events list">
          {
            this.props.events.map(evt => {
              if (evt.userId === currentUser) {
                return <EventsCard key={evt.id} evt={evt} {...this.props} />
              } else {
                return null
              }
            })
          }
        </section>
      </React.Fragment>
    );
  }
}
