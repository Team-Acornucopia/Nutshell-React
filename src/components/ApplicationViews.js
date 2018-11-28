// import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import newsManager from "../managers/newsManager";
import eventsManager from "../managers/eventsManager";
import messagesManager from "../managers/messagesManager";
import tasksManager from "../managers/tasksManager";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  state = {
    messages: [],
    tasks: [],
    events: [],
    news: []
  };

  componentDidMount() {
    const newState = {};
    // here will be fetches for messages, tasks, events, news
    // manager modules built separately

    newsManager.getAll().then(allNews => {
      this.setState({
        news: allNews
      });
    });

    eventsManager.getAll().then(allEvents => {
      this.setState({
        events: allEvents
      });
    });

    tasksManager.getAll().then(allTasks => {
      this.setState({
        tasks: allTasks
      });
    });

    messagesManager.getAll().then(allMessages => {
      this.setState({
        messages: allMessages
      });
    });
  }

  showMessages = () => {
    console.log(this.state.messages);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.messages.map(message => 
          <div key={message.id}>{message.message}</div>
        )}
      </React.Fragment>
      // this.state.messages.map(message => {
      //     console.log(message)
      // })
    );
  }
}

export default ApplicationViews;
