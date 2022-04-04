import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Pirate = ({pirate}) => {

  if (!pirate){
    return "Loading..."
  }

  return (
    <div>
    <p>
    {pirate.firstName} {pirate.lastName}
    </p>
    <p>Age: {pirate.age}</p>
    <p>Ship: {pirate.ship.name}</p>
    </div>
  )
}

export default Pirate;
