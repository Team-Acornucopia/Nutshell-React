import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventsCard from "./EventsCard";
import { Button } from 'semantic-ui-react'

export default class EventsList extends Component {
  render() {
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
          {this.props.events.map((evt, i) => (
            <EventsCard key={evt.id} evt={evt} highlight={i === 0} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
