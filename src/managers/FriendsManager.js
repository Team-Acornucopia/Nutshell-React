import APIManager from "./APIManager"

class FriendsManager extends APIManager {
  getFriends(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  addAndList(newFriend, cake) {
    let myNewFriend = {
      friendname: newFriend,
      username: cake
    }
    console.log(myNewFriend)
      return this.post(myNewFriend).then(() => this.all())
  }
}

export default new FriendsManager("friends")
