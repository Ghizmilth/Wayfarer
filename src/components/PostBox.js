import React, { Component } from "react";
import axios from "axios";
import City from "./City"
import PostList from "./PostList";
import Post from "./Post";

class PostBox extends Component {
  constructor(props) {
    super();
    this.state = { data: [] };
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }
  handlePostDelete(id) {
    axios
      .delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log("Post Deleted");
      })
      .catch(err => {
        console.log(err);
      });
    }

  render() {
    return (
      <div className="PostBox">
        <h2>PostBox</h2>
        <PostList />
        <PostForm />
      </div>
    );
  }
}

export default PostBox;
