import React, { Component } from 'react'
import LoggedInUsersCard from "./LoggedInUsersCard"
import FriendsCard from "./FriendsCard"
import NotFriendsCard from "./NotFriendsCard"
import { Button } from 'semantic-ui-react'

export default class MessagesList extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username");
        let myFriendsUserNames = this.props.friends.filter(friend => {
            if(friend.username === currentUser) {
                return true
            } else {
                return false
            }
        }).map(friend => {
            return friend.friendname
        })
        //third messages card for friends that arent friends
        //map over friends and use in if/else statement
        return (
            <React.Fragment>
                <section className="messagesButton">
                    <Button color="green" type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/messages/new")}}>New Message
                    </Button>
                </section>
                <section className="messages list">
                {
            this.props.messages.map(message => {
                if(message.userId === currentUser) {
                    return <LoggedInUsersCard key={message.id} message={message} deleteMessage={this.props.deleteMessage} {...this.props} />
                } else if (myFriendsUserNames.includes(message.userId)) {
                    return <FriendsCard key={message.id} message={message} deleteMessage={this.props.deleteMessage} {...this.props} />
                } else {
                    return <NotFriendsCard key={message.id} message={message} friends={this.props.friends} addFriend={this.addFriend} deleteMessage={this.props.deleteMessage} {...this.props} />
                }
            })
          }
                </section>
            </React.Fragment>
        )
    }
}