import React, { Component } from 'react';
import Card from './Card';
import { images } from './images';
import './Gallery.css'

class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			stateImages: images,
			searchField: ''
		}
	}

	onSearch = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const imageCards = []; 
		for(let i=0; i<this.state.stateImages.length; i++)
		{
			if(this.state.stateImages[i].title.toLowerCase().includes(this.state.searchField.toLowerCase()) || 
				this.state.stateImages[i].author.toLowerCase().includes(this.state.searchField.toLowerCase()))
			{
				imageCards.push(<Card imageContent={this.state.stateImages[i]} />);
			}
		}
		
		return(
			<div id="gallery">
				<h3 className="gallery-heading f1 tracked tc light-red o-90 pa5">GALLERY</h3>
				<div className="search-box tc mt3">
					<input 
						className="pa2 br3 b--light-red shadow-2 red" 
						type="search" 
						placeholder="search in galllery"
						onChange={this.onSearch} 
					/>
				</div>
				{imageCards}
			</div>
		);
	}
}

export default Gallery;