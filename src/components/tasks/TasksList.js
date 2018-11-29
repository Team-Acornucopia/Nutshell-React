import React, { Component } from 'react';
import TaskForm from "./TaskForm"
import TaskItem from "./TaskItem"

export default class TasksList extends Component {

//This is the same field change from the todo exercise, the deleteTask function
//is located in the ApplicationViews component.
  handleFieldChange2 = (event) => {
    // this.props.setTodoItemState(event.target.value)
    console.log("woot")
    this.props.deleteTask(event.target.id)
  }


//The only difference between this render and the todo render is the TaskForm component tag
  render() {
    // console.log(this.props.tasks)

           const taskNode = this.props.tasks.map( (currentTask) => {
// console.log(currentTask)
           return (

           <TaskItem deleteTask={this.props.deleteTask} thing={currentTask} key={currentTask.id} />
           )
           })
    return (
      <div>
      <h3>Tasks: </h3>
      <TaskForm addTask={this.props.addTask} />
    <ul>{taskNode}</ul>
    </div>
    )

  }
}