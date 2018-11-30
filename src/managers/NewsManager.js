import APIManager from "./APIManager"

class NewsManager extends APIManager {
  getNews(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  addAndList(newMessage) {
      return this.post(newMessage).then(() => this.all())
  }
}

export default new NewsManager("news")