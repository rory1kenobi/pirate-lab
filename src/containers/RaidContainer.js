import React, { useState, useEffect} from "react";
import RaidList from "../components/raids/RaidList";

const RaidContainer = () => {

    const [raids, setRaids] = useState([]);

    const fetchRaids = () => {
        fetch("/api/raids")
        .then(result => result.json())
        .then(data => setRaids(data))
    }

    useEffect(() => {
        fetchRaids()
    }, [])

    return(
        <RaidList raids={raids}/>
    )
}

export default RaidContainer;