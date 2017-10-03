import React from 'react'
import Comment from './comment'
import styles from '../App.css'

const CommentsList = ({data}) => {
	const listComments = data.map((comment) => {
		return (<Comment comment={comment} key={comment.id} />)
	});

	return (
		<div className="comment-list">
			{listComments}
		</div>
	);
}

export default CommentsList;