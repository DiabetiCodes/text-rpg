import React from 'react';

const Dropdown = ({ label, options }) => {
	return (
		<div className='rpgui-container rpgui-draggable framed'>
			<div className='w-[400px] max-w-[400px] text-center m-auto'>
				<label className='pb-4'>{label}:</label>
				<select className='rpgui-dropdown'>
					{options.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Dropdown;