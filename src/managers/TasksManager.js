import APIManager from "./APIManager"
class TasksManager extends APIManager {
  getTasks(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }

  postAndList(newtask) {
    return this.post(newtask).then(() => this.all())
  }

  patchAndList(updatedTask, id) {
    return this.patchTasks(updatedTask, id).then(() => this.all())
  }

  // post(newTask) {
  //   return fetch("http://localhost:5002/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newTask)
  //   }).then(data => data.json())
  // }
}

export default new TasksManager("tasks")