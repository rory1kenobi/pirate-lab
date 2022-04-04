import React from "react";
import Pirate from "./Pirate";
import { Link } from "react-router-dom";

const PirateDetail = ({pirate}) => {

    if(!pirate){
        return "Loading....."
    }

    const piratesRaids = pirate.raids.map((raid, index) => {
        return(
            <li key={index}>
                {raid.location}
            
            </li>
        )
    })

    const editUrl = "/pirates/" + pirate.id + "/edit"

    return(
        <div className="component">
            <Pirate pirate={pirate}/>
            <p>Raids:</p>
            <ul>{piratesRaids}</ul>
            <Link to={editUrl}><button type="button">Edit {pirate.firstName}</button></Link>
        </div>
    )
}

export default PirateDetail