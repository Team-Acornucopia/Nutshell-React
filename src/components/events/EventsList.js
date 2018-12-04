import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
import EventsCard from "./EventsCard";
import FriendsEventsCard from "./FriendsEventsCard";

export default class EventsList extends Component {
  render() {
    let currentUser = sessionStorage.getItem("username")
    let getFirstOne = false
    let highlight = false
    let myFriendsUserNames = this.props.friends.filter(friend => {
      if (friend.username === currentUser) {
        return true
      } else {
        return false
      }
    }).map(friend => {
      return friend.friendname
    })
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
                if (getFirstOne === true) {
                  highlight = false

                } else {
                  getFirstOne = true
                  highlight = true
                }
                return <EventsCard key={evt.id} evt={evt} highlight={highlight} {...this.props} />
              } else if (myFriendsUserNames.includes(evt.userId)) {
                if (getFirstOne === true) {
                  highlight = false

                } else {
                  getFirstOne = true
                  highlight = true
                }
                return <FriendsEventsCard key={evt.id} evt={evt} highlight={highlight} {...this.props} />
              }
            })
          }
        </section>
      </React.Fragment>
    );
  }
}
