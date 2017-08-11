import React, {Component} from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';



class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', text: ''};
    this.state = { isOpen: false };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleTitleChange(e) {
  this.setState({ title: e.target.value });
}


handleTextChange(e) {
  this.setState({ text: e.target.value });
}

handleSubmit(e) {
  e.preventDefault();
  let title = this.state.title.trim();
  let text = this.state.text.trim();
  if (!text || !title) {
    return;
  }
  this.props.onPostSubmit({ title: title, text: text });
  this.setState({title: "", text: ""});

}


openModal = () => {
  this.setState({
    isOpen: true
  });
};

hideModal = () => {
  this.setState({
    isOpen: false
  });
};







render (){
  return (
    <div className="modal-window">
    <form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='title'

          value={ this.state.title }
          onChange={ this.handleTitleChange } />
        <input
          type='text'
          placeholder='text'

          value={ this.state.text }
          onChange={ this.handleTextChange } />
        <input
          type='submit'
          value='Add Post'/>
          <button className='btn btn-primary' onClick={this.openModal}>
                Open Modal
              </button>
      </form>

      <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
        <ModalHeader>
          <ModalClose onClick={this.hideModal}/>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
            explicabo hic incidunt placeat quasi repellendus soluta,
            vero. Autem delectus est laborum minus modi molestias
            natus provident, quidem rerum sint, voluptas!</p>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-default' onClick={this.hideModal}>
            Close
          </button>
          <button className='btn btn-primary'>
            Save changes
          </button>
        </ModalFooter>
      </Modal>


    </div>
  )




}



}



export default PostForm
