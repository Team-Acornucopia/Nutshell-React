import React, { Component } from 'react'
import "./TaskItem.css"



export default class TaskIcon extends Component {

  render() {

    return (<img className="icon" src={this.props.thing.icon}></img>

    )

  }

}