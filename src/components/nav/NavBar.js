import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  logout = () => {
    sessionStorage.clear();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/events"
          name="events"
          active={activeItem === "events"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/news"
          name="news"
          active={activeItem === "news"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/tasks"
          name="tasks"
          active={activeItem === "tasks"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/messages"
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/friends"
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/login"   
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/register"
            name="register"
            active={activeItem === "register"}
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            as={Link}
            to="/home"
            name="logout"
            onClick={this.logout}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
