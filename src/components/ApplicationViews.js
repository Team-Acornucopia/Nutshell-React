import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewsList from "./news/NewsList"
import MessagesList from "./messages/MessagesList"
import TasksList from "./tasks/TasksList"
import NewsManager from "../managers/NewsManager";
import EventsManager from "../managers/EventsManager";
import MessagesManager from "../managers/MessagesManager";
import TasksManager from "../managers/TasksManager";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  state = {
    messages: [],
    tasks: [],
    taskItem: "",
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
  }

addTask = (task) => TasksManager.post(task)
.then(tasks => this.setState({
  tasks: tasks
})
)

deleteTask = (task) => TasksManager.removeAndList(task)
.then(tasks => this.setState({
  tasks: tasks
  })
)

  setTaskItemState = (val) => {
    this.setState({taskItem: val})
  }
  // showMessages = () => {
  //   console.log(this.state.messages);
  // };

  render() {
    // console.log(this.state.messages)
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
           <Route exact path="/tasks" render={(props) => {
            return <TasksList {...props}
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              addTask={this.addTask}
              setTaskItemState={this.setTaskItemState}
            />
          }} />
        </React.Fragment>
    );
  }
}

export default ApplicationViews;
