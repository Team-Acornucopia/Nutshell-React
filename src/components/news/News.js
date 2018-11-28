import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <section className="news">
        <h2>News</h2>
        {this.props.news.map(news => (
          <div key={news.id}>
          {news.title}
          </div>
        ))}
      </section>
    );
  }
}
