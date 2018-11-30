import { Route } from "react-router-dom";
import React, { Component } from "react";
import TasksList from "./tasks/TasksList";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import NewsForm from "./news/NewsForm";
import MessagesList from "./messages/MessagesList";
import EventsList from "./events/EventsList";
import EventsForm from "./events/EventsForm";
import NewsManager from "../managers/NewsManager";
import EventsManager from "../managers/EventsManager";
import MessagesManager from "../managers/MessagesManager";
import TasksManager from "../managers/TasksManager";
import Login from "./authentication/Login";
import UserManager from "../managers/UserManager";

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


  addArticle = news =>
    NewsManager.post(news)
      .then(() => NewsManager.all())
      .then(news =>
        this.setState({
          news: news
        })
      );

  deleteArticle = id => {
    return NewsManager.removeAndList(id).then(news =>
      this.setState({
        news: news
      })
    );
  };

  addEvent = events =>
    EventsManager.post(events)
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

  render() {
    return (
      <React.Fragment>
        <Route exact path="/messages" render={props => {
            return <MessagesList {...props} 
            messages={this.state.messages} 
            />;
          }}
        />
        <Route exact path="/tasks" render={(props) => {
          return <TasksList {...props}
            // taskItem={this.state.taskItem}
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            addTask={this.addTask}
          // setTaskItemState={this.setTaskItemState}
          />
        }} />
        <Route path="/news" render={(props) => {
          return <NewsList {...props}
            news={this.state.news}
            deleteArticle={this.deleteArticle}
          />
        }} />
        <Route path="/news/:newsId(\d+)" render={(props) => {
            return <NewsDetail {...props}
                news={this.state.news}
                deleteArticle={this.deleteArticle}
              />
          }} />
        <Route exact path="/news/new" render={props => {
            return <NewsForm {...props} 
            addArticle={this.addArticle} 
            />
          }}
        />
        <Route exact path="/login" render={props => {
            return <Login {...props} 
            users={this.state.users} />;
          }}
        />
        {/* <Route path="/login" component={Login} /> */}
        <Route
          exact
          path="/events"
          render={props => {
            return <EventsList
              {...props}
              events={this.state.events}
              deleteEvents={this.deleteEvents} />;
          }}
        />
        <Route
          exact
          path="/events/new"
          render={props => {
            return <EventsForm {...props} addEvent={this.addEvent} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;