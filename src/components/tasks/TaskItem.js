import React, { Component } from "react";
import "./TaskItem.css";
import { Button } from "semantic-ui-react"
import { Image } from 'semantic-ui-react'
// import TasksManager from '../../managers/TasksManager';

export default class TaskItem extends Component {
  state = {
    editedTask: "",
    editButton: "",
    editTextBox: "",
    showTaskUpdate: false,
    taskUpdateValue: "",
    showTaskDateUpdate: false,
    taskDateUpdateValue: ""
  };

  //#1
  //This function changes the state above, it gets the id of the target, which is the id of the button itself
  //this id has to be the same as the state name above. It also get the value of what has been written, and
  //sticks that into the stateToChange object, then it sets the state above as the stateToChange.
  handleFieldChange = evt => {
    console.log(evt.target.value);
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // zac - onchange for edit task
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  editSubmit = e => {
    e.preventDefault();
    console.log(this.state.taskUpdateValue);
    // create the object to send to patch function
    const toEdit = {
      // id: this.props.thing.id,
      task: this.state.taskUpdateValue,
      date: this.state.taskDateUpdateValue
    };
    console.log(toEdit);
    // send to patch
    // this.props.editTask(toEdit)
    this.props.editTask(toEdit, this.props.thing.id);
    this.setState({
      showTaskUpdate: !this.state.showTaskUpdate,
      showTaskDateUpdate: !this.state.showTaskDateUpdate
    });
  };

  //This function checks the checkbox itself to see if its checked or not.
  handleCheckBoxChange = evt => {
    if (evt.target.checked === false) {
      const taskCheckboxStatus = {
        completed: false
      };

      this.props.editTask(taskCheckboxStatus, this.props.thing.id);
    } else {
      const taskCheckboxStatus = {
        completed: true
      };

      this.props.editTask(taskCheckboxStatus, this.props.thing.id);
    }
  };

  //#2
  //This function constructs a new edited Task.
  constructEditedTask = () => {
    //This is the new object that will be patched into the database.
    const newTask = {
      task: this.state.editedTask,
      // date: this.props.state.taskDate,
      completed: false
    };
    //This goes back to application views where it gets the editTask function.
    //the this.props.thing.id looks at the key
    this.props.editTask(newTask, this.props.thing.id);
  };

  // original

  render() {
    // zac - trying a new way to edit
    const {
      showTaskUpdate,
      taskUpdateValue,
      showTaskDateUpdate,
      taskDateUpdateValue
    } = this.state;
    let taskForm = "";
    // let taskEditDate = "";

    if (showTaskUpdate) {
      taskForm = (
        <form onSubmit={this.editSubmit}>
          <input
            type="text"
            name="taskUpdateValue"
            placeholder="edit the task"
            value={taskUpdateValue}
            onChange={this.onChange}
          />
          <input
            type="date"
            name="taskDateUpdateValue"
            value={taskDateUpdateValue}
            onChange={this.onChange}
          />
          <Button>Submit Edit</Button>
        </form>
      );
    } else {
      taskForm = null;
    }

    return (
      <li id={this.props.itemId} key={this.props.thing.id} className="unchecked task">
      {/* <Image src='http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-1/1024/Acorn-icon.png' size='small' /> */}
        <input
          id="completed"
          className="checkboi"
          defaultChecked={this.props.thing.completed}
          onClick={this.handleCheckBoxChange}
          type="checkbox"
        />
        {this.props.thing.task}{" "}
        <button>
        <a
          href="#!"
          id={this.props.editButton_itemId}
          onClick={() =>
            this.setState({
              showTaskUpdate: !this.state.showTaskUpdate,
              showTaskDateUpdate: !this.state.showTaskDateUpdate
            })
          }
        >
          Edit
        </a>{" "}
        </button>
        <p className="listP">
          Completion: {this.props.thing.date}{" "}
          <Button
            size="mini"
            color="red"
            className=""
            onClick={() => {
              this.props.deleteTask(this.props.thing.id);
            }}
          >
            Delete
          </Button>{" "}
        </p>
        {taskForm}
      </li>
    );
  }
}
