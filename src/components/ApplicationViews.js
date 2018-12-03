import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TasksList from "./tasks/TasksList";
import TasksManager from "../managers/TasksManager";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import NewsForm from "./news/NewsForm";
import NewsEdit from "./news/NewsEdit"
import NewsManager from "../managers/NewsManager";
import MessagesList from "./messages/MessagesList";
import MessagesForm from "./messages/MessagesForm";
import MessagesDetail from "./messages/MessagesDetail";
import MessagesEdit from "./messages/MessagesEdit"
import MessagesManager from "../managers/MessagesManager";
import EventsList from "./events/EventsList";
import EventsForm from "./events/EventsForm";
import EventsManager from "../managers/EventsManager";
import EventsDetail from "./events/EventsDetail";
import EventsEdit from "./events/EventsEdit"
import Login from "./authentication/Login";
import UserManager from "../managers/UserManager";
import Register from "./authentication/Register"

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // isAuthenticated = () => sessionStorage.getItem("credentials") !== null;


  //I added the taskItem property to the state, this doesnt affect the
  //TaskList, its actually supposed to be for the TaskForm which is not working at the moment.
  //Even though its there its not supposed to break anything.
  state = {
    messages: [],
    tasks: [],
    // taskItem: "",
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


  addTask = (newTask) => TasksManager.postAndList(newTask)
    .then(() => {
      return TasksManager.getAll()
    })
    .then(allTasks => {
      // console.log(allTasks)
      this.setState({
        tasks: allTasks
      })
    })


  editTask = (task, id) => TasksManager.patchAndList(task, id)
    .then(tasks => this.setState({
      tasks: tasks
    })
    )


  //This deleteTask function is working, its being invoqued in the
  //TaskItem component
  deleteTask = (task) => TasksManager.removeAndList(task)
    .then(tasks => this.setState({
      tasks: tasks
    })
    )


  // showMessages = () => {
  //   console.log(this.state.messages);
  // };

  //I added a new route for TasksList.

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("username") !== null

  addArticle = news =>
    NewsManager.addAndList(news)
      .then(() => NewsManager.all())
      .then(news =>
        this.setState({
          news: news
        })
      );

  editArticle = (news, url) =>
    NewsManager.patchAndListNews(news, url)
      .then(() => NewsManager.all())
      .then(news =>
        this.setState({
          news: news
        })
      );


  addMessage = messages =>
    MessagesManager.addAndList(messages)
      .then(() => MessagesManager.all())
      .then(messages =>
        this.setState({
          messages: messages
        })
      );

  editMessage = (messages, url) =>
    MessagesManager.patchAndListMessages(messages, url)
      .then(() => MessagesManager.all())
      .then(messages =>
        this.setState({
          messages: messages
        })
      );

  deleteMessage = id => {
    return MessagesManager.removeAndList(id).then(messages =>
      this.setState({
        messages: messages
      })
    );
  };

  deleteArticle = id => {
    return NewsManager.removeAndList(id).then(news =>
      this.setState({
        news: news
      })
    );
  };

  addEvent = events =>
    EventsManager.addAndList(events)
      .then(() => EventsManager.all())
      .then(events =>
        this.setState({
          events: events
        })
      );

  deleteEvents = id => {
    return EventsManager.removeAndList(id).then(events =>
      this.setState({
        events: events
      })
    );
  };

  editEvents = (events, url) =>
    EventsManager.patchAndListEvent(events, url)
      .then(() => EventsManager.all())
      .then(events =>
        this.setState({
          events: events
        })
      );

  render() {
    return (
      <React.Fragment>
        <Route exact path="/messages" render={props => {
          if (this.isAuthenticated()) {
            return <MessagesList {...props}
              messages={this.state.messages}
              deleteMessage={this.deleteMessage} />;
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route exact path="/messages/new" render={props => {
          if (this.isAuthenticated()) {
            return <MessagesForm {...props}
              addMessage={this.addMessage} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route path="/messages/:messagesId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <MessagesDetail {...props}
              messages={this.state.messages}
              deleteMessage={this.deleteMessage} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/messages/edit/:messagesId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return <MessagesEdit {...props}
                messages={this.state.messages}
                editMessage={this.editMessage} />
            } else {
              return <Redirect to="/login" />
            }
          }} />
        <Route exact path="/tasks" render={(props) => {
          if (this.isAuthenticated()) {
            return <TasksList {...props}
              // taskItem={this.state.taskItem}
              // setTaskItemState={this.setTaskItemState}
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              addTask={this.addTask}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsList {...props}
              news={this.state.news}
              deleteArticle={this.deleteArticle} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/news/:newsId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsDetail {...props}
              news={this.state.news}
              deleteArticle={this.deleteArticle} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/news/new" render={props => {
          if (this.isAuthenticated()) {
            return <NewsForm {...props}
              addArticle={this.addArticle} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route path="/news/edit/:newsId(\d+)" render={props => {
          if (this.isAuthenticated()) {
            return <NewsEdit {...props}
              news={this.state.news}
              editArticle={this.editArticle} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/login" render={props => {
          return <Login {...props}
            users={this.state.users} />;
        }}
        />
        <Route exact path="/register" render={props => {
          return <Register {...props}
            users={this.state.users} />;
        }}
        />
        <Route exact path="/events" render={props => {
          if (this.isAuthenticated()) {
            return <EventsList {...props}
              events={this.state.events}
              deleteEvents={this.deleteEvents} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route exact path="/events/new" render={props => {
            if (this.isAuthenticated()) {
              return <EventsForm {...props} addEvent={this.addEvent} />
            } else {
              return <Redirect to="/login" />
            }
          }}
        />
        <Route path="/events/edit/:eventId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return <EventsEdit {...props}
                events={this.state.events}
                editEvents={this.editEvents} />
            } else {
              return <Redirect to="/login" />
            }
          }} />
        <Route path="/events/:eventsId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventsDetail {...props}
              events={this.state.events}
              deleteEvents={this.deleteEvents}
            />
          } else {
            return < Redirect to = "/login" />
            }
        }} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;