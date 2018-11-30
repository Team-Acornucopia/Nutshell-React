import React, { Component } from 'react'
import './TaskItem.css'
// import TasksManager from '../../managers/TasksManager';


export default class TaskItem extends Component {

state = {
  editButton: "",
  completed: ""
}

  // handleFieldChangeReact = (event) => {
  // const checkedBox = {}
  // if(checkedBox[event.target.id].classList.contains("unchecked")) {
  //   checkedBox[event.target.id].classList.remove("unchecked")
  //   checkedBox[event.target.id].classList.add("checked")
  //   this.setState(checkedBox)
  // }
  // }


  // changeCompleted = () => {

  //   this.editTask(this.props.thing.id)
  // }

  //#1
//This function changes the state above, it gets the id of the target, which is the id of the button itself
//this id has to be the same as the state name above. It also get the value of what has been written, and
//sticks that into the stateToChange object, then it sets the state above as the stateToChange.
  handleFieldChange = evt => {
    console.log(evt.target.value)
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  //#2
//This function constructs a new edited Task.
constructEditedTask = () => {
  //This is the new object that will be patched into the database.
  const newTask = {
    task: this.state.editButton,
    // date: this.props.state.taskDate,
    completed: false
  }
  //This goes back to application views where it gets the editTask function.
  //the this.props.thing.id looks at the key
  this.props.editTask(newTask, this.props.thing.id)
}



  handlecheckBoxChange = () => {
    if (this.state.completed) {
      this.setState({ checkbox: false })
    }
    else {
      this.setState({ checkbox: true })
    }
    // this.props.editTask(event.target.id)

  }

  //I commented this out, I was about to try to implement a class toggle on either a button that
  //then brings up the delete button or the delete button itself
  // checkboxToggle = () => {

  //   let checkbox = document.getElementById(this.props.thing.id)

  //   if (checkbox.classList.contains("unchecked")) {
  //     checkbox.classList.remove("unchecked")
  //     checkbox.classList.add("checked")
  //   }
  //   else if (checkbox.classList.contains("checked")) {
  //     checkbox.classList.remove('checked');
  //     checkbox.classList.add('unchecked');
  //   }
  // }


  // addDeleteButton = () => {
  //   let selectedCheckbox = document.getElementById(this.props.thing.id)

  //   if (selectedCheckbox.classList.contains("checked")) {
  //     let deleteButton = document.getElementByClassName("hidden")
  //     deleteButton.classList.remove("hidden")
  //     deleteButton.classList.add("visible")
  //   }
  // }

  //changes property of completed on click to either flase or true
  // changeCompleted = (id) => {

  //   this.props.thing.map((task) => {

  //     let currentTask = task.completed

  //     let updatedTask = (newCompleted) => {
  //       // const newTaskStatus = true
  //       if (currentTask) {
  //         const newCompleted = {
  //           completed: false
  //         }
  //       }
  //       else {
  //         const newCompleted = {
  //           completed: true
  //         }
  //       }
  //     }
  //     this.props.editTask(updatedTask, id)
  //   })
  // }

//original only changes to whatever is specified below
  // changeCompleted = (id) => {

  //   let updatedTask =
  //   {
  //     completed: false
  //   }


  //   this.props.editTask(updatedTask, id)
  // }

  //This render is exactly the same as the one in the todo exercise.
  render() {
    // console.log(this.props.thing.completed)

    return (<li id={this.props.itemId}
      key={this.props.thing.id}>{this.props.thing.task}
      <button id={this.props.editButton_itemId}>Edit</button>
      <input id="editButton" type="text" placeholder="Edit task" onChange={this.handleFieldChange}></input>
      <button onClick={this.constructEditedTask}>Submit Edit</button>
      <button className="unchecked" onClick={() => { this.changeCompleted(this.props.thing.id) }} type="checkbox" ></button>
      <button className="" onClick={() => {
        // console.log("item button2")
        this.props.deleteTask(this.props.thing.id)
      }}>
        Delete
      </button>
    </li>
    )
  }
}