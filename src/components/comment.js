import React from 'react';
import styles from '../App.css'

const Comment = ({comment}) => {
	return (
		<div className="single-comment">
			<img className="portrait" src={comment.imageUrl} alt="person photo" />
			<div className="infos">
				<p className="person-name">{comment.name}</p>
				<p className="comment-text">{comment.text}</p>
			</div>
		</div>
	);
}

export default Comment;