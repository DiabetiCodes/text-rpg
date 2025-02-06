import React from 'react';

const Dropdown = ({ label, options }) => {
	return (
		<div className='rpgui-container framed rpgui-draggable max-w-[400px]'>
			<label className='pb-4'>{label}:</label>
			<select className='rpgui-dropdown'>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;