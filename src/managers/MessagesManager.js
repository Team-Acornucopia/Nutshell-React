import APIManager from "./APIManager"

class MessagesManager extends APIManager {
  getMessages(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  post(newMessage) {
    return fetch("http://localhost:5002/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(data => data.json())
  }
}

export default new MessagesManager("messages")