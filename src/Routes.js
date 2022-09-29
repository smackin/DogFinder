import React from "react";
import {Route} from "react-router-dom"
import DogList from "./DogList";
import OneDogDetails from "./OneDogDetails";

function Routes({dogs}) {
    return (
        <div>
        <Route exact path="/dogs">
            <DogList dogs={dogs} />
        </Route> 
        <Route path="/dogs/:name">
            <OneDogDetails dogs={dogs} />
        </Route> 
        </div>
    ) ;
}

export default Routes; 