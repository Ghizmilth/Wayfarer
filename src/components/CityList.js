import React, { Component } from "react";
import "../MainStyle.css";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';




class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', imageURL: ''};
    this.state = { isOpen: false };
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(e) {
    this.setState({ name: e.target.value });
  }


  handleImageChange(e) {
    this.setState({ imageURL: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    let name = this.state.name.trim();
    let imageURL = this.state.imageURL.trim();
    if (!name || !imageURL) {
      return;
    }
    this.props.onPostSubmit({ name: name, imageURL: imageURL });
    this.setState({name: "", imageURL: ""});

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




  render() {
    return (

      <div className="modal-window">
        <h1>The World is Your Playground</h1>
        <button className='btn btn-primary' onClick={this.openModal}>
          Add New City
        </button>

        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Modal title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form>
                <input
                  type='text'
                  placeholder='name'
                  value={ this.state.name }
                  onChange={ this.handleNameChange } />
                <input
                  type='text'
                  placeholder='imageURL'
                  value={ this.state.imageURL }
                  onChange={ this.handleImageChange } />
            </form>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
              Close
            </button>
            <button className='btn btn-primary' onClick={this.handleSubmit}>
              Save City
            </button>
          </ModalFooter>

        </Modal>


      </div>
)

  }
}

export default CityList;
