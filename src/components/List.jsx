import React from 'react';

const List = () => {
	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='text-center m-auto'>
				<h1>List</h1>
				<hr />
				<p>RPGUI list:</p>
				<label>Profession:</label>
				<select className='rpgui-list' id='background-select' size='4'>
					<option value='Blacksmith'>Blacksmith</option>
					<option value='Merchant'>Merchant</option>
					<option value='City Guard'>City Guard</option>
					<option value='Alchemist'>Alchemist</option>
					<option value='Explorer'>Explorer</option>
					<option value='Thug'>Thug</option>
					<option value='Mercenary'>Mercenary</option>
					<option value='Royalty'>Royalty</option>
					<option value='Gladiator'>Gladiator</option>
				</select>
			</div>
		</div>
	);
};

export default List;
