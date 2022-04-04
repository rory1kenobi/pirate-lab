import React from 'react';
import Raid from './Raid.js';


const RaidList = ({raids}) => {
	const raidElements = raids.map((raid) => {
			return (<li key={raid.id} className="component-item">
				<Raid raid={raid} />
			</li>
		)
		})

	return (
		<ul className="component-list">
			{raidElements}
		</ul>

	)
}
 export default RaidList;
