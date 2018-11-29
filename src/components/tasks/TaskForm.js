import React, { Component } from 'react'

export default class TaskForm extends Component {

  handleFieldChange = (event) => {
    this.props.setTaskItemState(event.target.value)
  }

  render() {
    return (
      <div className="taskForm">
        <input type="text" placeholder="New Task" onChange={this.handleFieldChange} />
        <button onClick={() => {
          console.log("button clicked")
          this.props.addTask()
        }}>
        +
        </button>
      </div>
    )
  }
}