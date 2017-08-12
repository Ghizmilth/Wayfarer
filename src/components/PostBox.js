import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";
import PostForm from "./PostForm";
import "../MainStyle.css";

class PostBox extends Component {
  constructor(props) {
    super();
    this.state = { data: [] };
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadPostFromServer = this.loadPostFromServer.bind(this);
  }

  loadPostFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data.post });
    });
  }

  handleSubmit(e) {
    console.log(e);
    let post = this.state.data;
    e._user = "fake user data"; //  user_id
    e._city = "fake city data;"; // city_id
    let newPost = post.concat(e);
    this.setState({ data: newPost });
    console.log(this.props.url);
    axios
      .post(this.props.url, e)
      .then(res => {
        console.log("RES:", res);
        //this.setState({ data: res });
        //handleAddPost(res);
      })
      .catch(err => {
        console.error("OOPSIES", err);
      });
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
      <div>
        <div>
          <h2>Comment:</h2>
          <PostList
            onPostDelete={this.handlePostDelete}
            data={this.state.data}
          />
          <PostForm onPostSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default PostBox;
