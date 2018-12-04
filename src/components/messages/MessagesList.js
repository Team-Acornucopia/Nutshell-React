import React, { Component } from 'react'
import LoggedInUsersMessages from "./LoggedInUsersMessages"
import FriendsMessages from "./FriendsMessages"
import NotFriendsMessages from "./NotFriendsMessages"
import { Button } from 'semantic-ui-react'

export default class MessagesList extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username");
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
                <section className="messagesButton">
                    <Button color="green" type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/messages/new")
                        }}>New Message
                    </Button>
                </section>
                <section className="messages list">
                    {
                        this.props.messages.map(message => {
                            if (message.userId === currentUser) {
                                return <LoggedInUsersMessages key={message.id} message={message} deleteMessage={this.props.deleteMessage} {...this.props} />
                            } else if (myFriendsUserNames.includes(message.userId)) {
                                return <FriendsMessages key={message.id} message={message} deleteMessage={this.props.deleteMessage} {...this.props} />
                            } else {
                                return <NotFriendsMessages key={message.id} message={message} friends={this.props.friends} addFriend={this.addFriend} deleteMessage={this.props.deleteMessage} {...this.props} />
                            }
                        })
                    }
                </section>
            </React.Fragment>
        )
    }
}