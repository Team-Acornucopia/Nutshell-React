import React, { Component } from 'react'

//The problem with this component I believe is that the state of the value is not being
//changed properly, everytime you write in the text input it will break.

export default class TaskForm extends Component {

  //This fieldChange has a different name from the one in TaskList
  //other than that its exactly the same as the one in TaskList and
  //the one in the todo exercise.
  handleFieldChange = (event) => {

    this.props.setTaskItemState(event.target.value)
    console.log(event.target.value)
  }

  // constructNewTask = () => {
  //   const newTask = {name: this.target.value}
  //   this.props.addTask(newTask)
  // }

  //This render is exactly the same from the todo exercise.
  render() {
    return (
      <div className="taskForm">
        <input type="text" placeholder="New Task" onChange={this.handleFieldChange} />

        <button onClick={this.constructNewTask}>
        +
        </button>

        {/* <button onClick={() => {
          console.log("button clicked")
          this.props.addTask(newTask)
        }}>
        +
        </button> */}

      </div>
    )
  }
}