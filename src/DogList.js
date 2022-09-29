import React from "react"; 
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return(
        <>
        <div>
            <div >
                <div >
                    <h1 >
                    COME SEE ALL THE DOGGOZZ!!
                    </h1>
                    <p> Click a Name to begin .. </p>
                </div>
            </div>
        </div>

        <div>
            {dogs.map(d => (
            <div key={d.name}>
                <h3>
                    <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                </h3>
            </div>
            ))}
        </div>
        </>
    );
}


export default DogList;