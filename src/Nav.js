import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar({dogs}) {
	const links = dogs.map(dog => (
		<Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
			{dog.name}
		</Link>
	));
	return (
		<nav>
			<NavLink exact to="/dogs">
				Home
			</NavLink>
			{links}
		</nav>
	);
}

export default NavBar;
