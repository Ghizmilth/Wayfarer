import React, { Component } from "react";
import axios from "axios";

class PostBox extends Component {
  render() {
    return (
      <div className="post-box">
        <h3>Post components will be here</h3>
        <button type="submit" value="Add Post">
          Add Post
        </button>
      </div>
    );
  }
}

export default PostBox;
