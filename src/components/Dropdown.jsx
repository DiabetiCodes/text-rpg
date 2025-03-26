import React from 'react';

const Dropdown = ({ label, options }) => {
	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='text-center m-auto'>
				<label className='pb-4'>{label}:</label>
				<select className='rpgui-dropdown leading-relaxed h-auto py-2'>
					{options.map((option, index) => (
						<option key={index} value={option} className='py-2'>
							{option} 
							<br />
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Dropdown;
