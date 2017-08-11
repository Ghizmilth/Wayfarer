import React, { Component } from "react";
import "../MainStyle.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      place: "",
      user: "",
      text: ""
    };
    this.deletePost = this.deletePost.bind(this);
  }
  deletePost(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    console.log("oops deleted");
  }

  render() {
    return (
      <div>

        <a href="#" onClick={this.deleteComment}>
          delete
        </a>
      </div>
    );
  }
}

export default Post;
