import APIManager from "./APIManager"

class NewsManager extends APIManager {
  getNews(id) {
    return this.get(id)
  }
  getAll() {
    return this.allSortedFurthest()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  addAndList(newMessage) {
      return this.post(newMessage).then(() => this.all())
  }
  patchAndListNews(payload, url) {
    return this.patch(payload, url).then(() => this.allSortedFurthest())
  }
}

export default new NewsManager("news")