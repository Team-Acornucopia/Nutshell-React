const remoteURL = "http://localhost:5002";

export default {
    get(id) {
      return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json());
    },
    getAll() {
      return fetch(`${remoteURL}/tasks`).then(e => e.json());
    },
    removeAndList(id) {
      return fetch(`http://localhost:5002/tasks/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/tasks`))
        .then(e => e.json());
    },
    post(newTasks) {
      return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTasks)
      }).then(data => data.json())
    }
  };