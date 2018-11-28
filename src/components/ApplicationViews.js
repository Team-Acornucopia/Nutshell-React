// import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import newsManager from "../managers/newsManager";
import eventsManager from "../managers/eventsManager";
import messagesManager from "../managers/messagesManager";
import tasksManager from "../managers/tasksManager";
import News from "./news/News";

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

  // below works

  // render() {
  //   return (
  //     <React.Fragment>
  //       {this.state.messages.map(message =>
  //         <div key={message.id}>{message.message}</div>
  //       )}
  //     </React.Fragment>
  //     // this.state.messages.map(message => {
  //     //     console.log(message)
  //     // })
  //   );
  // }

  render() {
    return (
      <BrowserRouter>
         <Route
          exact
          path="/news"
          render={props => {
            return <News news={this.state.news} />;
          }}
        />
      </BrowserRouter>
    );
  }
}

export default ApplicationViews;
