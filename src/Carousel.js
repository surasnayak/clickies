import React from 'react';
import './Carousel.css';

const Carousel = () => {
	const loveImg = require('./resources/images/red-heart-2.png');
	return (
		<div className="mt0 back-styles bg-light-red o-70">
			<h1 className="main-header mt0 pt6 tc lh-solid white">CLICKIES</h1>
			<div className="bottom-container flex items-center justify-center tracked">
				<h3 className="bottom-header mt3 tc white">Made with</h3>
				<img alt=" LOVE " src={loveImg} height="60px" width="60px"/>
				<h3 className="bottom-header mt3 white"> by SURAS KUMAR NAYAK</h3>
			</div>
		</div>
	);
}

export default Carousel;