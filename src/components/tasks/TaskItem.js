import React, { Component } from 'react'


export default class TaskItem extends Component {

  //I commented this out, I was about to try to implement a class toggle on either a button that
  //then brings up the delete button or the delete button itself
  // checkboxToggle = () => {

  //   let boxie1 = document.getElementById("myCheck")

  //   if (boxie1.classList.contains("unchecked")) {
  //     boxie1.classList.remove("unchecked")
  //     boxie1.classList.add("checked")



  //   }
  //   else if (boxie1.classList.contains("checked")) {
  //     boxie1.classList.remove('checked');
  //     boxie1.classList.add('unchecked');


  //   }

  // }


  //This render is exactly the same as the one in the todo exercise.
  render() {
// console.log(this.props.thing)
    return (<li id={this.props.itemId}>{this.props.thing.task}
      <button onClick={() => {
        // console.log("item button2")
        this.props.deleteTask(this.props.thing.id)
      }}>
      -
      </button>
      </li>
    )


  }
}