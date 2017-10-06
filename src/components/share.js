import React, { Component } from 'react'
import Modal from 'react-modal'
import styles from '../App.css'

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
      		showModal: false
    	};
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
    	this.setState({ showModal: true });
  }
  
  	handleCloseModal () {
    	this.setState({ showModal: false });
  }

    render() {
        return (
        	<div>
                <img src="/share.png" className="share-button" onClick={this.handleOpenModal}  />
                <Modal
                	isOpen={this.state.showModal}
                	contentLabel="Share"
                	onRequestClose={this.handleCloseModal}
                	className="Modal"
                	overlayClassName="Overlay"
                	>
                		<h1>Profile URL</h1>
                		<p><a href="{window.location.href}">{window.location.href}</a></p>
                		<button onClick={this.handleCloseModal} className="btn btn-danger">Close</button>
                	</Modal>
            </div>
        );
    }
}

export default Share;