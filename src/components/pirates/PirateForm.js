import React, { useEffect } from "react";
import { useState } from "react";

const PirateForm = ({pirate, ships, onCreate, onUpdate}) => {

    const [statePirate, setStatePirate] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        ship: null
    })

    useEffect(() => {
        if(pirate){
            let copiedPirate = {...pirate}
            setStatePirate(copiedPirate)
        }
    }, [pirate])

    const findShipIndex = () => {
        if(pirate){
            return ships.findIndex((ship) => {
                return pirate.ship.id === ship.id
            })
        }else{
            return null;
        }
    }

    let heading = "";
    if (!pirate){
        heading = "Create Pirate"
    } else{
        heading = "Edit " + pirate.firstName;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(statePirate.id){
            onUpdate(statePirate)
        }else{
        onCreate(statePirate);
        }
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedPirate = {...statePirate};
        copiedPirate[propertyName] = event.target.value;
        setStatePirate(copiedPirate)
    }

    const handleShip = (event) => {
        const index = parseInt(event.target.value);
        const selectedShip = ships[index];
        let copiedPirate = {...statePirate};
        copiedPirate["ship"] = selectedShip;
        setStatePirate(copiedPirate);
    }

    const shipOptions = ships.map((ship, index) => {
        return <option key={index} value={index}>{ship.name}</option>
    })

    return(
        <>
            <h3>{heading}</h3>
            <form onSubmit ={handleSubmit}>
                <input tyoe ="text" placeholder="First Name" name="firstName" onChange={handleChange} value={statePirate.firstName}/>
                <input tyoe ="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={statePirate.lastName}/>
                <input type="number" placeholder="Age" name="age" onChange={handleChange} value={statePirate.age}/>
                <select name="ship" onChange={handleShip} defaultValue ={findShipIndex() || "select-ship"}>
                <option disabled value="select-ship">Select a ship</option>
                {shipOptions}
                </select>
                <button type="submit">Save</button>

            </form>
        </>
    )

}

export default PirateForm;