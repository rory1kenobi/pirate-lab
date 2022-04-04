import React from 'react';
import Pirate from './Pirate.js';
import {Link} from "react-router-dom";


const PirateList = ({pirates}) => {

	if(pirates.lenght === 0){
		return <p>Loding....</p>
	}

	const pirateNodes  = pirates.map((pirate, index) =>{
		const detailUrl = "/pirates/" + pirate.id
		return(
			<li key={index} className="component-item">
				<div className="component">
					<Link to={detailUrl}><Pirate pirate={pirate}/></Link>
				</div>
			</li>
		)
	})


	return (
		<ul className="component-list">
     		{pirateNodes}
   		</ul>

	)
}
 export default PirateList;
