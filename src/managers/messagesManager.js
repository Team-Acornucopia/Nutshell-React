const remoteURL = "http://localhost:5002";

export default {
    get(id) {
      return fetch(`${remoteURL}/messages/${id}`).then(e => e.json());
    },
    getAll() {
      return fetch(`${remoteURL}/messages`).then(e => e.json());
    },
    removeAndList(id) {
      return fetch(`http://localhost:5002/messages/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/messages`))
        .then(e => e.json());
    },
    post(newMessages) {
      return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessages)
      }).then(data => data.json())
    }
  };