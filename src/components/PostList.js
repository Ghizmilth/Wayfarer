import React, { Component } from "react";
import Post from "./Post";


class PostList extends Component {
  render() {
    return (
      <div className="container">
        <Post onCommentDelete={this.props.onCommentDelete} />
  
    </div>

    );
  }
}

export default PostList;
