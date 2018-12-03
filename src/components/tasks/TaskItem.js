import React, { Component } from "react";
import "./TaskItem.css";
// import TasksManager from '../../managers/TasksManager';

export default class TaskItem extends Component {

  state = {
    editedTask: "",
    editButton: "",
    editTextBox: "",
    showTaskUpdate: false,
    taskUpdateValue: ""

  }

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
      task: this.state.taskUpdateValue
    };
    console.log(toEdit);
    // send to patch
    // this.props.editTask(toEdit)
    this.props.editTask(toEdit, this.props.thing.id);
    this.setState({
      showTaskUpdate: !this.state.showTaskUpdate
    })
  };

  //This function checks the checkbox itself to see if its checked or not.
  handleCheckBoxChange = (evt) => {

    if (evt.target.checked === false) {

      const taskCheckboxStatus = {
        completed: false
      };

      this.props.editTask(taskCheckboxStatus, this.props.thing.id)
    }

    else {

      const taskCheckboxStatus = {
        completed: true
      };

      this.props.editTask(taskCheckboxStatus, this.props.thing.id)
    }
  }


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









  // //original
  // //This render is exactly the same as the one in the todo exercise.
  render() {
    // console.log(this.props.thing.completed)




    //   return (<li id={this.props.itemId}
    //     key={this.props.thing.id}>{this.props.thing.task}
    //     <button id="editButton" onClick={this.showEditTextBox}>Edit</button>
    //     <input id="editedTask" type="text" placeholder="Edit task" onChange={this.handleFieldChange}></input>
    //     <button onClick={this.constructEditedTask}>Submit Edit</button>
    //     {/* <button className="unchecked" onClick={() => { this.changeCompleted(this.props.thing.id) }} type="checkbox" ></button> */}
    //     <input id="completed" className="unchecked" defaultChecked={this.props.thing.completed} onClick={this.handleCheckBoxChange} type="checkbox" ></input>
    //     <button className="" onClick={() => {
    //       // console.log("item button2")
    //       this.props.deleteTask(this.props.thing.id)
    //     }}>
    //       Delete
    //   </button>
    //   </li>
    //   )
    // }



    // zac - trying a new way to edit
    const { showTaskUpdate, taskUpdateValue } = this.state;
    let taskForm = "";
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
          <button>Submit Edit</button>
        </form>
      );
    } else {
      taskForm = null;
    }



    return (
      <li id={this.props.itemId} key={this.props.thing.id}>
        <input id="completed" className="unchecked" defaultChecked={this.props.thing.completed} onClick={this.handleCheckBoxChange} type="checkbox" ></input>
        {this.props.thing.task}
        <a
          href="#!"
          id={this.props.editButton_itemId}
          onClick={() =>
            this.setState({
              showTaskUpdate: !this.state.showTaskUpdate
            })
          }
        >
          Edit
  </a>
        {taskForm}
        {/* <input id="editButton" type="text" placeholder="Edit task" onChange={this.handleFieldChange}></input> */}
        {/* <button onClick={this.constructEditedTask}>Submit Edit</button> */}
        <button
          className=""
          onClick={() => {
            this.props.deleteTask(this.props.thing.id);
          }}
        >
          Delete
  </button>
      </li>
    );
  }
}
