import React, { Component } from "react";
import Post from "./Post";


class PostList extends Component {
  render() {
    return (
      <div className="container">

      <div className="PostList">
        <Post onCommentDelete={this.props.onCommentDelete} />
      </div>
    </div>

    );
  }
}

export default PostList;
