const remoteURL = "http://localhost:5002";

export default {
    get(id) {
      return fetch(`${remoteURL}/news/${id}`).then(e => e.json());
    },
    getAll() {
      return fetch(`${remoteURL}/news`).then(e => e.json());
    },
    removeAndList(id) {
      return fetch(`http://localhost:5002/news/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/news`))
        .then(e => e.json());
    },
    post(newNews) {
      return fetch(`${remoteURL}/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newNews)
      }).then(data => data.json())
    }
  };