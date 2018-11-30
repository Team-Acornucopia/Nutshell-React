import React, { Component } from 'react'

//The problem with this component I believe is that the state of the value is not being
//changed properly, everytime you write in the text input it will break.

export default class TaskForm extends Component {


  state = {
    taskItem: "",
    taskDate: "",
    completed: ""
  }


  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  constructNewTask = () => {
    // evt.preventDefault()
    const newTask = {
      task: this.state.taskItem,
      date: this.state.taskDate,
      completed: false
    }
    this.props.addTask(newTask)
  }



  //This render is exactly the same from the todo exercise.
  render() {

    return (
      <div className="taskForm">
        <input id="taskItem" type="text" placeholder="New Task" onChange={this.handleFieldChange} />
        <input type="date" placeholder="New Task" />
        <button onClick={this.constructNewTask}>
          +
        </button>

      </div>
    )
  }
}