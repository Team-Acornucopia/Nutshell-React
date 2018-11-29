import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewsList from "./news/NewsList"
import MessagesList from "./messages/MessagesList"
import TasksList from "./tasks/TasksList"
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
    taskItem: "",
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

//This function is not working, its currently being used in TaskForm
addTask = (task) => TasksManager.post(task)
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

//This function is not working its connected to the TaskForm
  setTaskItemState = (val) => {
    this.setState({taskItem: val})
  }


  // showMessages = () => {
  //   console.log(this.state.messages);
  // };

  //I added a new route for TasksList.
render() {
    console.log(this.state.users);
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
            return <NewsList {...props} news={this.state.news} />;
          }}
        />
            <Route exact path="/tasks" render={(props) => {
            return <TasksList {...props}
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              addTask={this.addTask}
              setTaskItemState={this.setTaskItemState}
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
