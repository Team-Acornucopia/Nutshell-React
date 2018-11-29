import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import MessagesList from "./messages/MessagesList";
import NewsManager from "../managers/NewsManager";
import EventsManager from "../managers/EventsManager";
import MessagesManager from "../managers/MessagesManager";
import TasksManager from "../managers/TasksManager";
import Login from "./authentication/Login";
import UserManager from "../managers/UserManager";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  state = {
    messages: [],
    tasks: [],
    events: [],
    news: [],
    users: []
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

    EventsManager.getAll().then(allEvents => {
      this.setState({
        events: allEvents
      });
    });

    TasksManager.getAll().then(allTasks => {
      this.setState({
        tasks: allTasks
      });
    });

    MessagesManager.getAll().then(allMessages => {
      this.setState({
        messages: allMessages
      });
    });

    UserManager.getAll().then(allUsers => {
      this.setState({
        users: allUsers
      });
    });
  }

  deleteArticle = (id) => {
    return NewsManager.removeAndList(id)
      .then(news => this.setState({
        news: news
      })
      )
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/messages"
          render={props => {
            return <MessagesList {...props} messages={this.state.messages} />;
          }}
        />
        <Route
          exact
          path="/news"
          render={props => {
            return <NewsList {...props}
              news={this.state.news}
              deleteArticle={this.deleteArticle}
            />
          }}
        />
        <Route path="/news/:newsId(\d+)" render={(props) => {
          return <NewsDetail
            {...props}
            news={this.state.news}
            deleteArticle={this.deleteArticle}
          />
        }} />
        <Route
          exact
          path="/login"
          render={props => {
            return <Login {...props} users={this.state.users} />;
          }}
        />
        {/* <Route path="/login" component={Login} /> */}
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
