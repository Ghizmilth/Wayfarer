import React, { Component } from "react";
import Post from "./Post";
import "../MainStyle.css";

class PostList extends Component {
  render() {
    return (

      <div className="PostList">
        <Post onCommentDelete={this.props.onCommentDelete} />
      </div>
    
    );
  }
}

export default PostList;
