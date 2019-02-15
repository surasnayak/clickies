import React from 'react';
import './Card.css';

const Card = ({ imageContent }) => {

	const imgSrc = require(`./resources/images/${imageContent.location}`);
	const likeIcon = require('./resources/images/like.png');
	return (
		<div className="flex grow center w-60 mt5 mb5 card-styles">
			<img className="br3 shadow-3" alt={imageContent.location} src={imgSrc} height="350px" width="550px"/>
			<div className="pl3 light-red">
				<h3 className="tracked f3">{imageContent.title}</h3>
				<p className="author-text">{imageContent.author}</p>
				<div className="flex mt5">
					<img alt='Likes :' src={likeIcon} width="15px" height="15px" />
					<p className="mt0 ml2">{imageContent.likes}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;