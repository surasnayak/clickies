import React from 'react';
import { contributorsNames } from './contributors-names';

const Contributors = () => {

	const authorCards = [];
	for(let i=0; i<contributorsNames.length; i++)
	{
		authorCards.push(<Card content={contributorsNames[i]} />);
	}
	return(
		<div className="bg-light-red" id="contributors">
			<h3 className="card-styles f1 tracked tc white pa5">CONTRIBUTORS</h3>
			<div className="flex flex-wrap justify-center">
				{authorCards}
			</div>
		</div>
	);
}

const Card = ({content}) => {
	let name = content.name;
	let image = content.image;
	let imageLink = require('./resources/contributors/' + image);
	return (
		<div className="ma4 tc">
			<img className="ba bw1 b--white br-100" alt="author" src={imageLink} width="200px" height="200px" />
			<h3 className="card-styles white f3 tracked">{name}</h3>
		</div>
	);
}

export default Contributors; 