import APIManager from "./APIManager"

class FriendsManager extends APIManager {
  getFriends(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(oldFriend, user) {
    return this.delete(oldFriend, user).then(() => this.all())
  }
  addAndList(newFriend, user) {
    let myNewFriend = {
      friendname: newFriend,
      username: user
    }
      return this.post(myNewFriend).then(() => this.all())
  }
}

export default new FriendsManager("friends")
