import React from "react"; 
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return(
        <>
        <div>
            <div >
                <div >
                    <h1 >
                    HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.
                    </h1>
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