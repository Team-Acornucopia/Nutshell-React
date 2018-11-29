import React, { Component } from 'react'


export default class TaskItem extends Component {

  checkboxToggle = () => {

    let boxie1 = document.getElementById("myCheck")

    if (boxie1.classList.contains("unchecked")) {
      boxie1.classList.remove("unchecked")
      boxie1.classList.add("checked")



    }
    else if (boxie1.classList.contains("checked")) {
      boxie1.classList.remove('checked');
      boxie1.classList.add('unchecked');


    }

  }

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