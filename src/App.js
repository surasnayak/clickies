import React, { Component } from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Gallery from './Gallery';

class App extends Component {

	render(){
		return(
			<div>
				<Navigation />
				<Carousel />
				<Gallery />
			</div>
		);
	}
}

export default App;