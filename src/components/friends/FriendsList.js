import React, { Component } from 'react'
import FriendsCard from "./FriendsCard"
import { Button } from 'semantic-ui-react'

export default class MessagesList extends Component {
    render() {
        let currentUser = sessionStorage.getItem("username")
        return (
            <React.Fragment>
                {/* <section className="messagesButton">
                    <Button color="green" type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/messages/new")}}>New Friend
                    </Button>
                </section> */}
                <section className="messages list">
                    {
                        this.props.friends.map(friend => {
                            if (friend.username === currentUser) {
                                return <FriendsCard key={friend.id} friend={friend} deleteFriend={this.props.deleteFriend}{...this.props} />
                            } else {
                                return null
                            }
                        })
                    }
                    }
                </section>
            </React.Fragment>
        )
    }
    return
}