// const remoteURL = "http://localhost:5002";

// export default {
//     get(id) {
//       return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json());
//     },
//     getAll() {
//       return fetch(`${remoteURL}/tasks`).then(e => e.json());
//     },
//     removeAndList(id) {
//       return fetch(`http://localhost:5002/tasks/${id}`, {
//         method: "DELETE"
//       })
//         .then(e => e.json())
//         .then(() => fetch(`http://localhost:5002/tasks`))
//         .then(e => e.json());
//     },
//     post(newTasks) {
//       return fetch(`${remoteURL}/tasks`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newTasks)
//       }).then(data => data.json())
//     }
//   };


  import APIManager from "./APIManager"

class TasksManager extends APIManager {
  getAnimal(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }

  //I added the newTask = {text:this.state.taskItem}, but it may be missplaced
  //the todo exercise had this fetch in their app.js, since we have it here thats why I tried to
  //implement it here, but its still not working. Thats the only change here.
  post(newTask) {
    newTask = {text: this.state.taskItem}
    return fetch("http://localhost:5002/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(data => data.json())
    .then(() => this.all())
  }
}

export default new TasksManager("tasks")