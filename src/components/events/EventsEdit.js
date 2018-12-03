import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class EventsEdit extends Component {
  
     state = {
        name: "",
        date: "",
        time: "",
        location: "",
        userId: "",
        id: ""
    }
    
      // need to clarify this
     handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
     componentDidMount() {
        // store the existing values in state to start
        let newState = {}
        // Error here
        let event = this.props.events.find(event => event.id === parseInt(this.props.match.params.eventId))
        console.log(event)
        newState.name = event.name
        newState.date = event.date
        newState.time = event.time
        newState.location = event.location
        newState.id = event.id
        newState.userId = sessionStorage.getItem("username")
     
         this.setState(newState)
    }
     // editEvent = (event, id) =>
    //   EventsManager.patchAndList(event, id)
    //     .then(() => EventsManager.all())
    //     .then(event =>
    //       this.setState({
    //         events: events
    //       })
    //     );
         
    editSubmittedEvent = e => {
        // prepare objects for editing database
        e.preventDefault()
        const event = {
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            userId: sessionStorage.getItem("username"),
            id: this.state.id
        }
   
        let eventURL = "http://localhost:5002/events/"
        console.log(`${eventURL}${this.state.id}`)
        return this.props.editEvents(event, `${eventURL}${this.state.id}`)
            .then(() => this.props.history.push("/events"))
    }
     render() {
         return (
            <div className="container">
                <form className="editEventForm">
                    <div className="form-group">
                        <label htmlFor="eventName">Change Event Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="name" value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Change Event Date</label>
                        <input type="date" required className="form-control" onChange={this.handleFieldChange} id="date" value={this.state.date} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventTime">Change Event Time</label>
                        <input type="time" required className="form-control" onChange={this.handleFieldChange} id="time" value={this.state.time} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventLocation">Change Event Location</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="location" value={this.state.location} />
                    </div>
              
                     <Button type="submit" size="tiny" color="green" className="btn btn-primary" onClick={this.editSubmittedEvent}>Edit Event</Button>
                     <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/events/`}>Back</Button>
                 </form>
            </div>
        );
    }
}
 export default EventsEdit 