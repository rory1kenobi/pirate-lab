import React, {useEffect, useState} from "react";
import ShipList from "../components/ships/ShipList";



const ShipContainer = () => {

    const [ships, setShips] = useState([]);

    useEffect(() => {
        fetchShips()
    }, [])

    const fetchShips = () => {
        fetch("/api/ships")
        .then(result => result.json())
        .then(data => setShips(data));
    }

    return(
        <ShipList ships={ships}/>
    )
}

export default ShipContainer