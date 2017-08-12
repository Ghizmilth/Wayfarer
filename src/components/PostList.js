import React, { Component } from "react";
import Post from "./Post";
import "../MainStyle.css";

class PostList extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="PostList">
        <Post />
=======
      <div>
        <Post onCommentDelete={this.props.onCommentDelete} />
>>>>>>> 61dc4a9b6bd835761f58c9c5cb4935438dc8f964
      </div>
    );
  }
}

export default PostList;
