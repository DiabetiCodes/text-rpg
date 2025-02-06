import React from 'react';

const ProgressBars = ({ label, id, value, color }) => {
	// label: health, mana, stamina, etc
	// id: hp-bar, mana-bar, stamina-bar
	// value: 0-1 represemts how full the bar is
	// color: red, green, blue, or purple

	// Ensure value does not exceed 1.0
	const clampedValue = Math.min(value, 1.0);

	return (
		<div className='rpgui-container framed rpgui-draggable'>
			<label>{label}:</label>
			<div
				id={`${id}-bar`}
				data-value={`${clampedValue}`} // Use the clamped value
				className={`rpgui-progress ${color}`}></div>
		</div>
	);
};

export default ProgressBars;
