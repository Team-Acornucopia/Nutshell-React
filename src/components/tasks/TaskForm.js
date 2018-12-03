import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

//The problem with this component I believe is that the state of the value is not being
//changed properly, everytime you write in the text input it will break.

export default class TaskForm extends Component {
  state = {
    taskItem: "",
    taskDate: "",
    completed: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewTask = () => {
    // evt.preventDefault()
    const newTask = {
      task: this.state.taskItem,
      date: this.state.taskDate,
      completed: false
    };
    this.props.addTask(newTask);
  };

  //This render is exactly the same from the todo exercise.
  render() {
    return (
      <div className="taskForm">
        {/* <input id="taskItem" type="text" placeholder="New Task" onChange={this.handleFieldChange} /> */}
        <Form onChange={this.handleFieldChange}>
          <label>New Task</label>
          <Form.Group>
            {/* <Form.Field type="text" /> */}
            <Form.Input
              width={5}
              id="taskItem"
              placeholder="What do you want to accomplish?"
            />
            <Form.Input
              width={3}
              id="taskDate"
              type="date"
              onChange={this.handleFieldChange}
            />
            <Button color="blue" size="small" onClick={this.constructNewTask}>+</Button>
          </Form.Group>
        </Form>
        {/* <input id="taskDate" type="date" onChange={this.handleFieldChange} /> */}
      </div>
    );
  }
}
