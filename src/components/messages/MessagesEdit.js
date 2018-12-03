import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class MessagesEdit extends Component {
    // state = {
    //     animalName: "",
    //     type: "",
    //     employee: "",
    //     owners: [],
    // }

    state = {
        message: "",
        date: "",
        userId: "",
        id: ""
    }

    // handleFieldChange = e => {
    //     const stateChange = {}
    //     // if (e.target.id === "owners") {
    //     //   let owners = []
    //     //   for( let i = 0; i < e.target.options.length; i++) {
    //     //     if(e.target.options[i].selected) {
    //     //       owners.push(Number(e.target.options[i].id))
    //     //     }
    //     //   }
    //     //   stateChange[e.target.id] = owners
    //     // } else {
    //     stateChange[e.target.id] = e.target.value
    //     // }
    //     this.setState(stateChange)
    // }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // store the existing values in state to start
        let newState = {}
        let messages = this.props.messages.find(messages => messages.id === parseInt(this.props.match.params.messagesId))
        console.log(messages)
        newState.message = messages.message
        newState.date = messages.date
        newState.id = messages.id
        newState.userId = sessionStorage.getItem("username")
        // let owners = this.props.animalOwners
        //   .filter(relation => relation.animalId === animal.id)
        //   .map(join => this.props.owners.find(owner => owner.id === join.ownerId))

        // newState.owners = owners.map(owner => owner.id)

        this.setState(newState)
    }

    // editArticle = (news, id) =>
    //   NewsManager.patchAndList(news, id)
    //     .then(() => NewsManager.all())
    //     .then(news =>
    //       this.setState({
    //         news: news
    //       })
    //     );

        
    editSubmittedMessage = e => {
        // prepare objects for editing database
        e.preventDefault()
        const news = {
            // name: this.state.animalName,
            // type: this.state.type,
            // userId: sessionStorage.getItem("username"),
            // id: this.props.match.params.animalId
            message: this.state.message,
            date: this.state.date,
            userId: sessionStorage.getItem("username"),
            id: this.state.id
        }
        // const owners = this.state.owners
        // console.log("animal", news)
        // return this.props.editAnimal(news, owners)
        let messagesURL = "http://localhost:5002/messages/"
        console.log(`${messagesURL}${this.state.id}`)
        return this.props.editMessage(news, `${messagesURL}${this.state.id}`)
            .then(() => this.props.history.push("/messages"))
    }

    render() {

        return (
            <div className="container">
                <form className="editMessageForm">
                    <div className="form-group">
                        <label htmlFor="submittedMessage">Change Message</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="message" value={this.state.message} />
                    </div>
                    {/* <div className="row"> */}
                    

                        {/* <div className="form-group col-md-6">
              <label htmlFor="owners">{`Change Owner(s)`}</label>
              <select className="form-control" defaultValue={[]} name="owners" id="owners" onChange={this.handleFieldChange} size="6" multiple>
                {
                  // Pre-select the current owners
                  this.props.owners.map((o, i) => {
                    if(this.state.owners.find(owner => owner === o.id )) {
                      return <option selected key={o.id} id={o.id}>{o.name}</option>
                    }
                    return <option key={o.id} id={o.id}>{o.name}</option>
                  })
                }
              </select>
            </div> */}
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="type">Change Animal Type</label>
                                <input type="text" required className="form-control" onChange={this.handleFieldChange} id="synopsis" placeholder="Type" value={this.state.synopsis} />
                            </div> */}
                            {/* <div className="form-group">
                <label htmlFor="employee">Change Caretaker</label>
                <select className="form-control" name="employee" id="employee" onChange={this.handleFieldChange}>
                  <option value="">Select an employee</option>
                  {
                  // Pre-select the current employee
                  this.props.employees.map(e => {
                    if(this.state.employee === e.id) {
                      return <option selected key={e.id} id={e.id} value={e.id}>{e.name}</option>
                    }
                    return <option key={e.id} id={e.id} value={e.id}>{e.name}</option>
                  })
                  }
                </select>
              </div> */}
                        {/* </div> */}
                    {/* </div> */}

                    <Button color="green" size="tiny" type="submit" className="btn btn-primary" onClick={this.editSubmittedMessage}>Edit Message</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/messages/`}>Back</Button>
                </form>
            </div>
        );
    }
}

export default MessagesEdit