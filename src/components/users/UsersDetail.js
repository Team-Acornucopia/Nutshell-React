import React, { Component } from "react"
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class UsersDetail extends Component {
    render() {
        const user = this.props.users.find(a => a.id === parseInt(this.props.match.params.usersId)) || {}
        let currentUser = sessionStorage.getItem("username")
        // let myFriendsUserIds = this.props.friends.filter(friend => {
        //     if (friend.username === currentUser) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }).map(friend => {
        //     return friend
        // })
        // let thisSpecificFriend;
        // myFriendsUserIds.forEach(thisFriend => {
        //     if (thisFriend.friendname === user.username) {
        //         thisSpecificFriend = thisFriend.id
        //     }
        // })
        return (
            <section className="users details">
                <div key={user.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h1>User: {user.username}</h1>
                            <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/users/`}>Back</Button>
                            <Button size="tiny" color="pink"
                                onClick={() => this.props.addFriend(user.username, currentUser).then(() => this.props.history.push("/users"))}
                                className="card-link">Add Friend</Button>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}