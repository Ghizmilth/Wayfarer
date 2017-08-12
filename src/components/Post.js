import React, { Component } from "react";
import "../MainStyle.css";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "react-modal-bootstrap";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      title: "",
      text: "",
      user: "",
      text: ""
    };
    this.deletePost = this.deletePost.bind(this);
  }

  //opens our modal
  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  //closes our modal
  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  deletePost(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    console.log("oops deleted");
  }
  editPost(e){}

  render() {
    return (

      <div className="post">
        <form id="{this.state._id}-update" action="#" onsubmit="PostUpdateHandleSubmit(this.state._id)" method="PUT" className="post-update-form" name="{this.state.id._id}-update">
          <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className='row'>
                  <div className="col-md-3 col-xs-12">
                    <img src="images/user/UserImg.jpg" alt="post image" className="postData" />
                  </div>
                  <div className="col-md-9 col-xs-12">
                    <ul className="list-group">
                      <li className="list-group-item">

                        <span id="{this.state._Id}-title" className='postTitleData'>{this.state.title}</span>
                        <span id="{this.state._Id}-title-input-span" className='postInput'>
                          <input id="{this.state._Id}-title-input" type="text" name="title" value="{this.state.title}" size="{this.state.title.length}" required />
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span id="{this.state._Id}-text" className='postTextData'>{this.state.text}</span>
                        <span id="{this.state._Id}-text-input-span" className='postInput'>
                          <input id="{this.state._Id}-text-input" type="text" name="text" size="{this.state.text.length}" value="{post.text}" required />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='panel-footer'>
                    <button className='btn btn-primary del-post pull-right' onClick={this.deleteComment}>Delete Event</button>
                    <button className='btn btn-primary edit-post pull-right'>Edit Event</button>
                    <button className='btn btn-primary save-post pull-right'>Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

      <div className="modal-window">
        <button className="btn btn-primary" onClick={this.openModal}>
          Delete
        </button>

        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal} />
            <ModalTitle>Are you sure??</ModalTitle>
          </ModalHeader>
          <ModalBody>This data cannot be recovered.</ModalBody>
          <ModalFooter>
            <form>
              <button className="btn btn-default">Yes</button>
            </form>
          </ModalFooter>
        </Modal>
</div>
      </div>
    );
  }
}

export default Post;
