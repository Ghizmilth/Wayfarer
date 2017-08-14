import React, { Component } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';
import '../MainStyle.css';
import $ from 'jquery-ajax';

class PostBox extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      cityId: ''
    };
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);

    // switch (this.props.postObjType) {
    //   case 'city':
    //     this.setState({postObjType:this.props.postObjType})
    //     if (this.props.postCityId){
    //       this.setState({postCityId:this.props.postCityId})
    //     } else {
    //       this.setState({postCityId:0})
    //     }
    //     break;
    //   case 'user':
    //     this.setState({postObjType:this.props.postObjType})
    //     if (this.props.postUserId){
    //       this.setState({postCityId:this.props.postUserId})
    //     } else {
    //       this.setState({postUserId:0})
    //     }
    //     break;
    //   default:
    //     this.setState({postObjType:''})
    //     this.setState({postCityId:0})
    //     this.setState({postUserId:0})
    // }
  }

  loadPostsFromServer() {
      // let posts_list = [
      //   {
      //     _id:1,
      //     title: 'This place rocks!',
      //     text: 'omg my favorite place',
      //     user: {_id:23,username:'Jed'},
      //     city: {_id:45,name:'Jedcity'}
      //   },
      //   {
      //     _id:2,
      //     title: 'Tattooed offal heirloom lumbersexual',
      //     text: 'Hexagon mumblecore tilde bushwick.',
      //     user: {_id:34,username:'mami'},
      //     city: {_id:33,name:'Miami'}
      //   },
      //   {
      //     _id:3,
      //     title: 'Cold pressed health goth',
      //     text: 'Shoreditch PBR&B celiac, ethical jean shorts 90s neutra slow-carb.',
      //     user: {_id:89,username:'moron'},
      //     city: {_id:78,name:'jerksVille'}
      //   }
      // ];
      // this.setState({data:posts_list})

    axios.get(`${this.props.url}${this.state.postObjId}`).then(res => {
      console.log(res.data)
      this.setState({ data: res.data.post });
    })
  }

  handleSubmit(e) {
    console.log(e);
    let post = this.state.data;
    e._user = 'fake user data'; //  user_id
    e._city = 'fake city data;'; // city_id
    let newPost = post.concat(e);
    this.setState({ data: newPost });
    console.log(`POST URL: ${this.props.url}/${e._id}`);
    axios
      .post(`${this.props.url}/${e._id}`, e)
      .then(res => {
        console.log('RES:', res);
        this.setState({ data: res });
        //handleAddPost(res);
      })
      .catch(err => {
        console.error('OOPSIES', err);
      });
  }

  handlePostDelete(id) {
    axios
      .delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Post Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data });
    });
  }
  render() {
    return (
      <div className="PostBox">
        <div className="row">
          <h2>Comment:</h2>
          <PostForm onPostSubmit={this.handleSubmit} />
        </div>
        <div className="row">
          <PostList
            loadPostsFromServer={this.loadPostsFromServer}
            onPostDelete={this.handlePostDelete}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}

export default PostBox;
