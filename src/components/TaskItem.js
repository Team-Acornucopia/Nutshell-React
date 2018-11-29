import React, { Component } from 'react'
import './TaskItem.css'
// import TasksManager from '../../managers/TasksManager';


export default class TaskItem extends Component {


  // state = {
  //   checkbox: false
  // }

  // componentDidMount() {
  //   this.setState({ checkbox: this.props.thing.completed })
  // }




  // handleFieldChangeReact = (event) => {
  // const checkedBox = {}
  // if(checkedBox[event.target.id].classList.contains("unchecked")) {
  //   checkedBox[event.target.id].classList.remove("unchecked")
  //   checkedBox[event.target.id].classList.add("checked")
  //   this.setState(checkedBox)
  // }
  // }
  changeCompleted = () => {

    this.editTask(this.props.thing.id)
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
  changeCompleted = (id) => {

    this.props.thing.map((task) => {

      let currentTask = task.completed

      let updatedTask = (newCompleted) => {
        // const newTaskStatus = true
        if (currentTask) {
          const newCompleted = {
            completed: false
          }
        }
        else {
          const newCompleted = {
            completed: true
          }
        }
      }
      this.props.editTask(updatedTask, id)
    })
  }

//original only changes to whatever is specified below
  changeCompleted = (id) => {

    let updatedTask =
    {
      completed: false
    }


    this.props.editTask(updatedTask, id)
  }

  //This render is exactly the same as the one in the todo exercise.
  render() {
    // console.log(this.props.thing.completed)

    return (<li id={this.props.itemId}
      key={this.props.thing.id}>{this.props.thing.task}
      <button id={this.props.editButton_itemId}>Edit</button>


      <button className="unchecked" onClick={() => { this.changeCompleted(this.props.thing.id) }} type="checkbox" ></button>
      <button className="hidden" onClick={() => {
        // console.log("item button2")
        this.props.deleteTask(this.props.thing.id)
      }}>
        Delete
      </button>
    </li>
    )
  }
}