import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import NewsList from "./news/NewsList"
import MessagesList from "./messages/MessagesList"
import NewsManager from "../managers/NewsManager";
import eventsManager from "../managers/eventsManager";
import MessagesManager from "../managers/MessagesManager";
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
    // const newState = {

    // };

    // here will be fetches for messages, tasks, events, news
    // manager modules built separately

    NewsManager.getAll().then(allNews => {
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

    MessagesManager.getAll().then(allMessages => {
      this.setState({
        messages: allMessages
      });
    });
  }

  showMessages = () => {
    console.log(this.state.messages);
  };

  render() {
    console.log(this.state.messages)
    return (
        <React.Fragment>
          <Route exact path="/messages" render={(props) => {
            return <MessagesList {...props}
              messages={this.state.messages}
            />
          }} />
          <Route exact path="/news" render={(props) => {
            return <NewsList {...props}
              news={this.state.news}
            />
          }} />
        </React.Fragment>
    );
  }
}

export default ApplicationViews;
