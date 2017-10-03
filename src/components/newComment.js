import React, { Component } from 'react';
import styles from '../App.css'

class NewComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
		this.inputChange = this.inputChange.bind(this);
		this.onClickHandler = this.onClickHandler.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	inputChange(e) {
		this.setState({inputValue: e.target.value});
	}

	onClickHandler(event) {
			this.props.add(this.state.inputValue);
			this.setState({inputValue: ''});
	}

	handleKeyDown(event) {
		if(event.key == 'Enter') {
			event.preventDefault();
			this.onClickHandler();
		}
	}

	render() {
		return(
				<div className="input">
					<input className="comment-adder" placeholder="Add a comment" value={this.state.inputValue} onChange={this.inputChange} onKeyDown={this.handleKeyDown} />
				</div>
		);
	}
};

export default NewComment;