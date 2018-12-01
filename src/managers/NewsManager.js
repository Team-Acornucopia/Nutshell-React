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
  // patchAndList(updatedTask, id) {
  //   return fetch(`http://localhost:5002/news/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(updatedTask)
  //   }).then(data => data.json())
  // }
  patchAndListNews(payload, url) {
    return this.patch(payload, url).then(() => this.all ())
  }
}

export default new NewsManager("news")