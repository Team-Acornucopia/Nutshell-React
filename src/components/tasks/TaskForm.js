import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import "./TaskItem.css"

//The problem with this component I believe is that the state of the value is not being
//changed properly, everytime you write in the text input it will break.

export default class TaskForm extends Component {
  state = {
    taskItem: "",
    taskDate: "",
    completed: "",
    showNewTaskMessage: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  warningMessage = () => {

    const {
      showNewTaskMessage
    } = this.state;
    let newTaskMessage = "";
    // let taskEditDate = "";

    if (showNewTaskMessage) {
      newTaskMessage = (
        <form onSubmit={this.constructNewTask}>
          <p>New task has been added at the bottom</p>
          <Button color="red">x</Button>
        </form>
      );
    } else {
      newTaskMessage = null;
    }

  }

  constructNewTask = () => {
    // evt.preventDefault()

    const newTask = {
      task: this.state.taskItem,
      date: this.state.taskDate,
      completed: false,
      icon: "http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-1/1024/Acorn-icon.png"
    };
    this.props.addTask(newTask);
    this.warningMessage()
    this.setState({
      showNewTaskMessage: !this.state.showNewTaskMessage
    });
    // this.setState(showNewTaskMessage)
  };

  //This render is exactly the same from the todo exercise.
  render() {

    const {
      showNewTaskMessage
    } = this.state;
    let newTaskMessage = "";
    // let taskEditDate = "";

    if (showNewTaskMessage) {
      newTaskMessage = (
        <form className="newTaskMessageForm" onSubmit={this.constructNewTask}>
              <p className="newTaskMessageParagraph">New task has been added at the bottom
          </p>
          <button size="mini" type="checkbox" color="red" className="newTaskMessageButton" onClick={() => {this.setState({
              showNewTaskMessage: !this.state.showNewTaskMessage
            })}}>x
            </button>

        </form>
      );
    } else {
      newTaskMessage = null;
    }



    return (
      <div className="taskForm">
        {/* <input id="taskItem" type="text" placeholder="New Task" onChange={this.handleFieldChange} /> */}
        <Form onChange={this.handleFieldChange}>
          <label>New Task</label>
          <Form.Group>
            {/* <Form.Field type="text" /> */}
            <Form.Input
              width={6}
              id="taskItem"
              placeholder="What do you want to accomplish?"
            />
            <Form.Input
              width={5}
              id="taskDate"
              type="date"
              onChange={this.handleFieldChange}
            />
            {/* <Button color="blue" size="small" onClick={this.constructNewTask}>+</Button> */}
            <Button color="blue" size="small" onClick={this.constructNewTask}>+</Button>
          </Form.Group>
          {newTaskMessage}
        </Form>
        {/* <input id="taskDate" type="date" onChange={this.handleFieldChange} /> */}
      </div>
    );
  }
}
