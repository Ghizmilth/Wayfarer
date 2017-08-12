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




class CityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', imageURL: '', description: ''};
    this.state = { isOpen: false };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }


  handleImageChange(e) {
    this.setState({ imageURL: e.target.value });
  }


handleDescriptionChange(e) {
  this.setState({ description: e.target.value });
}


  handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    let name = this.state.name.trim();
    let imageURL = this.state.imageURL.trim();
    let description = this.state.description.trim();
    if (!name || !imageURL || !description) {
      return;
    }
    this.props.onCitySubmit({ name: name, imageURL: imageURL, description: description });
    this.setState({name: "", imageURL: "", description: ""});

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


        <h1>The World is Your Oyster</h1>
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
                  <input
                    type='text'
                    placeholder='description'
                    value={ this.state.description }
                    onChange={ this.handleDescriptionChange } />
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

export default CityForm;
