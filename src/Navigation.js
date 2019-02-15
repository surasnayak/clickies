import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav>
		 	<ul className="list mt0 mb0 pt3 pb3 bg-light-red white fw6 flex o-70 ttu tracked">
		 		<a className="link white" href="#"><li className="ml3">HOME</li></a>
		 		<a className="link white" href="#gallery"><li className="ml3">Gallery</li></a>
		 		<a className="link white" href="#"><li className="ml3">Contributors</li></a>
		 		<a className="link white ml-auto" href="#"><li className="ml-auto mr4">Contact</li></a>
		 	</ul>
		</nav>
	);
}

export default Navigation;