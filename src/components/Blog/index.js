import React, { Component } from "react";

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: []
    }
  }
  render() {
    return (
      <div className="container">
        <h2>(#) of Posts</h2>
        <hr />
        <p>Post Cards will go here</p>
      </div>
    );
  }
}

export default BlogPage;