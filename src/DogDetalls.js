import React from 'react';
import { Redirect, Link } from 'react-router-dom';

function DogDetails({ dog }) {
	if (!dog) return <Redirect to="/dogs" />;

	return (
		<div className="DogDetails">
			<div>
				<img src={dog.src} alt={dog.name} />
				<h2>Hi, I am {dog.name}</h2>
				<h2>I am {dog.age} years old! </h2>
				<ul>{dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
				<Link to="/dogs"> Go Back </Link>
			</div>
		</div>
	);
}

export default DogDetails;
