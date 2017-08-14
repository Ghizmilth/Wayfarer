import React, { Component } from 'react';
import Post from './Post';
import '../MainStyle.css';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let postNodes = this.props.data.map(post => {
      return <Post text={post.text} title={post.title} key={post['_id']} />;
    });
    return (
      <div className="PostList">
        {postNodes}
      </div>
    );
  }
}

export default PostList;
