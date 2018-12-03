import APIManager from "./APIManager"

class MessagesManager extends APIManager {
  getMessages(id) {
    return this.get(id)
  }
  getAll() {
    return this.allSortedSoonest()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  addAndList(newMessage) {
      return this.post(newMessage).then(() => this.all())
  }
  patchAndListMessages(payload, url) {
    return this.patch(payload, url).then(() => this.allSortedFurthest())
  }
}

export default new MessagesManager("messages")