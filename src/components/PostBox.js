import React, { Component } from "react";
import axios from "axios";

class PostBox extends Component {
  constructor(props){
    super();
    this.state = {data: [] };
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }
  handlePostDelete(id){
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Post Deleted');
      })
      .catch(err => {
        console.log(err);
      });
}

  render() {
    return (
      <div className="post-box">
        <h3>Post components will be here</h3>
        <button type="submit" value="Add Post">
          Add Post
        </button>
      </div>

      <PostList
        onPostDelete={ this.handlePostDelete }
        data={ this.state.data } />  
    );
  }

}

export default PostBox;
