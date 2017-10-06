import React, { Component } from 'react'
import Comment from './comment'
import styles from '../App.css'
import ReactDOM from 'react-dom'

class CommentsList extends Component {
	constructor(props) {
		super(props);
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}
	 scrollToBottom = () => {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

	render() {
	const listComments = this.props.data.map((comment) => {
		return (<Comment comment={comment} key={comment.id} />)
	});

	return(
	<div ref={(el) => { this.messagesContainer = el; }} className="comment-list">
			{listComments}
		</div>
	);
}
}


export default CommentsList;