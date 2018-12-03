import React, { Component } from "react";
import "./TaskItem.css";
// import TasksManager from '../../managers/TasksManager';

export default class TaskItem extends Component {

state = {
editedTask: "",
completed: this.props.thing.completed,
editButton: "",
editTextBox: "",
// checkbox: null
}

// showEditTextBox = () => {
// return(
// <input type="texbox" placeholder="woop"></input>
// )
// }

// handleEditButtonFieldChange = evt => {

// const stateToChange = {}
// stateToChange[evt.target.id]
// this.setState(stateToChange)
// }

// handleFieldChangeReact = (event) => {
// const checkedBox = {}
// if(checkedBox[event.target.id].classList.contains("unchecked")) {
// checkedBox[event.target.id].classList.remove("unchecked")
// checkedBox[event.target.id].classList.add("checked")
// this.setState(checkedBox)
// }
// }


//#1
//This function changes the state above, it gets the id of the target, which is the id of the button itself
//this id has to be the same as the state name above. It also get the value of what has been written, and
//sticks that into the stateToChange object, then it sets the state above as the stateToChange.
handleFieldChange = evt => {
console.log(evt.target.value);
const stateToChange = {};
stateToChange[evt.target.id] = evt.target.value;
this.setState(stateToChange);
};

// zac - onchange for edit task
// onChange = e => {
// this.setState({ [e.target.name]: e.target.value });
// };
// editSubmit = e => {
// e.preventDefault();
// console.log(this.state.taskUpdateValue);
// // create the object to send to patch function
// const toEdit = {
// // id: this.props.thing.id,
// task: this.state.taskUpdateValue
// };
// console.log(toEdit);
// // send to patch
// // this.props.editTask(toEdit)
// this.props.editTask(toEdit, this.props.thing.id);
// };


handleCheckBoxChange = (evt) => {
//retreive task and completed property

// this.props.getTask(this.props.thing.id)
// console.log(this.props.getTask(this.props.thing.id))
// console.log(this.props.getTask(this.props.thing.completed))
// //set the state to that of the completed property of the task from the database
const stateToChange = {}
// stateToChange[evt.target.id] = this.props.thing.completed
// this.setState(stateToChange);

// const databaseTaskState = this.state.completed
console.log("data before", this.props.thing.completed)
console.log("state before", this.state.completed)
// this.setState()

// console.log(evt.target.id)
// console.log(this.state.completed)
// const stateToChange = {}

// if (evt.target.id) {
if (this.state.completed) {
stateToChange[evt.target.id] = false
this.setState(stateToChange);

const newTask = {
completed: this.state.completed
};

this.props.editTask(newTask, this.props.thing.id)
}
else if (this.state.completed === false) {

stateToChange[evt.target.id] = true
this.setState(stateToChange);
// this.setState({ completed: true });
const newTask = {
completed: this.state.completed
};
this.props.editTask(newTask, this.props.thing.id)
}
console.log("data after", this.props.thing.completed)
console.log("state after", this.state.completed)
}

//#2
//This function constructs a new edited Task.
constructEditedTask = () => {
//This is the new object that will be patched into the database.
const newTask = {
task: this.state.editedTask,
// date: this.props.state.taskDate,
completed: false
};
//This goes back to application views where it gets the editTask function.
//the this.props.thing.id looks at the key
this.props.editTask(newTask, this.props.thing.id);
};









// //original
// //This render is exactly the same as the one in the todo exercise.
render() {
// console.log(this.props.thing.completed)




return (<li id={this.props.itemId}
key={this.props.thing.id}>{this.props.thing.task}
<button id="editButton" onClick={this.showEditTextBox}>Edit</button>
<input id="editedTask" type="text" placeholder="Edit task" onChange={this.handleFieldChange}></input>
<button onClick={this.constructEditedTask}>Submit Edit</button>
{/* <button className="unchecked" onClick={() => { this.changeCompleted(this.props.thing.id) }} type="checkbox" ></button> */}
<button id="completed" className="unchecked" onClick={this.handleCheckBoxChange} type="checkbox" ></button>
<button className="" onClick={() => {
// console.log("item button2")
this.props.deleteTask(this.props.thing.id)
}}>
Delete
</button>
</li>
)
}



// zac - trying a new way to edit
// const { showTaskUpdate, taskUpdateValue } = this.state;
// let taskForm = "";
// if (showTaskUpdate) {
// taskForm = (
// <form onSubmit={this.editSubmit}>
// <input
// type="text"
// name="taskUpdateValue"
// placeholder="edit the task"
// value={taskUpdateValue}
// onChange={this.onChange}
// />
// <button>Submit Edit</button>
// </form>
// );
// } else {
// taskForm = null;
// }



// return (
// <li id={this.props.itemId} key={this.props.thing.id}>
// {this.props.thing.task}
// <a
// href="#!"
// id={this.props.editButton_itemId}
// onClick={() =>
// this.setState({
// showTaskUpdate: !this.state.showTaskUpdate
// })
// }
// >
// Edit
// </a>
// {taskForm}
// {/* <input id="editButton" type="text" placeholder="Edit task" onChange={this.handleFieldChange}></input> */}
// {/* <button onClick={this.constructEditedTask}>Submit Edit</button> */}
// <button
// className="unchecked"
// onClick={() => {
// this.changeCompleted(this.props.thing.id);
// }}
// type="checkbox"
// />
// <button
// className=""
// onClick={() => {
// this.props.deleteTask(this.props.thing.id);
// }}
// >
// Delete
// </button>
// </li>
// );
// }
}
