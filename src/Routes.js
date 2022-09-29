import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DogList from './DogList';
import OneDogDetails from './OneDogDetails';

function Routes({ dogs }) {
	return (
		<Switch>
			<Route exact path="/dogs">
				<DogList dogs={dogs} />
			</Route>
			<Route path="/dogs/:name">
				<OneDogDetails dogs={dogs} />
			</Route>
            <Route><h1>NOT FOUND </h1></Route>
		</Switch>
	);
}

export default Routes;
