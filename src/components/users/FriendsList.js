import React, { Component } from 'react'
import FriendsCard from "./FriendsCard"
import UsersCard from "./UsersCard"
import { Button } from 'semantic-ui-react'
import "./UsersCard.css"

export default class MessagesList extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
        let myFriendsUserNames = this.props.friends.filter(friend => {
            if (friend.username === currentUser) {
                return true
            } else {
                return false
            }
        }).map(friend => {
            return friend.friendname
        })
        return (
            <React.Fragment>
                <section className="usersContainer">
                    {
                        this.props.users.map(user => {
                            if (myFriendsUserNames.includes(user.username)) {
                                return <FriendsCard key={user.id} user={user} myFriendsUserNames={myFriendsUserNames} deleteFriend={this.props.deleteFriend}{...this.props} />
                            } else if (user.username !== currentUser) {
                                return <UsersCard key={user.id} user={user} myFriendsUserNames={myFriendsUserNames} addFriend={this.props.addFriend} {...this.props} />
                            }
                        })
                    }
                </section>
            </React.Fragment>
        )
    }
    return
}