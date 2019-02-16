import React from 'react';
import Card from './Card';
import { images } from './images';

const Gallery = () => {

	const imageCards = []; 
	for(let i=0; i<images.length; i++)
	{
		imageCards.push(<Card imageContent={images[i]} />);
	}

	return(
		<div id="gallery">
			<h3 className="card-styles f1 tracked tc light-red o-90 pa5">GALLERY</h3>
			{imageCards}
		</div>
	);
}

export default Gallery;