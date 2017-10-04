import React, { Component } from 'react'
import styles from '../App.css'

class Follow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: true
		}
	}

	onClickHandler() {
		let value = !this.state.value;

		this.setState({value});
		this.props.follow(this.state.value);
	}

	getFollow() {
		const getButton = this.state.value
		? '<button type="button" class="follow-button">Follow</button>'
		: '<button type="button" class="follow-button">Unfollow</button>'
		return {__html: getButton}; 
	};

	render() {

		return(
			 <div className="follow">
                <span onClick={ () => this.onClickHandler() } dangerouslySetInnerHTML={ this.getFollow() }></span>
            </div>
			)
	}
}
export default Follow;