import React, { Component } from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Contributors from './Contributors';

class App extends Component {

	render(){
		return(
			<div>
				<Navigation />
				<Carousel />
				<Gallery />
				<Contributors />
			</div>
		);
	}
}

export default App;