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
  post(newArticle) {
    return fetch("http://localhost:5002/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    }).then(data => data.json())
  }
}

export default new NewsManager("news")