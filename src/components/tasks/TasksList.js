import React, { Component } from 'react';
import TaskForm from "./TaskForm"
import TaskItem from "./TaskItem"

export default class TasksList extends Component {

  //This is the same field change from the todo exercise, the deleteTask function
  //is located in the ApplicationViews component.
  deleteHandleFieldChange = (event) => {
    // this.props.setTodoItemState(event.target.value)
    console.log("woot")
    this.props.deleteTask(event.target.id)
  }



  //The only difference between this render and the todo render is the TaskForm component tag
  render() {
    // console.log(this.props.tasks)


    let makeNode = this.props.tasks.map(currentTask => {
      // console.log(currentTask)
      return (
        // <div>
        <TaskItem deleteTask={this.props.deleteTask} editTask={this.props.editTask} getTask={this.props.getTask} thing={currentTask} key={currentTask.id} />
        // {/* <button id="editButton"  onChange={this.handleFieldChange} >WOOHOO</button>
        // </div> */}
      )
    })


    return (
      <div>
        <h3>Tasks: </h3>
        <TaskForm addTask={this.props.addTask} setTaskItemState={this.props.setTaskItemState} />
        <ul>{makeNode}</ul>
      </div>
    )

  }
}