import React, { Component } from "react";
import axios from "axios";
import City from "./City"
import PostList from "./PostList";
<<<<<<< HEAD
import Post from "./Post";
=======
import PostForm from "./PostForm";
import "../MainStyle.css";

>>>>>>> 61dc4a9b6bd835761f58c9c5cb4935438dc8f964

class PostBox extends Component {
  constructor(props) {
    super();
    this.state = { data: [] };
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadPostFromServer = this.loadPostFromServer.bind(this);
  }

loadPostFromServer(){
  axios.get(this.props.url)
  .then(res => {
    this.setState({data: res.data.post})
  })
}

handleSubmit(e) {
    console.log(e);
    let post = this.state.data;
    post.id = Date.now();
    let newPost = post.concat(e);
    this.setState({data: newPost});
    console.log(this.props.url);
    axios.post(this.props.url, e)
      .then(res => {
        console.log("RES:" , res);
        //this.setState({ data: res });
        //handleAddPost(res);
      })
      .catch(err => {
        console.error("OOPSIES", err);
      });
}


  handlePostDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log("Post Deleted");
      })
      .catch(err => {
        console.log(err);
      });
    }





  render() {
    return (
<<<<<<< HEAD
      <div className="PostBox">
        <h2>PostBox</h2>
        <PostList />
        <PostForm />
=======
      <div>
        <div >
          <h2 >Comment:</h2>
        <PostList
          onPostDelete={ this.handlePostDelete }
          data={ this.state.data } />
        <PostForm onPostSubmit={ this.handleSubmit }/>

      </div>
>>>>>>> 61dc4a9b6bd835761f58c9c5cb4935438dc8f964
      </div>
    );
  }
}

export default PostBox;
