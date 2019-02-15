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
			{imageCards}
		</div>
	);
}

export default Gallery;