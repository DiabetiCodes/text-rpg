import React from 'react';

const Sliders = ({ label, min, max, value, variant }) => {
	return (
		<div className='max-w-[400px] w-[200px]'>
			<label>{label}</label>
			<input
				className={`rpgui-slider ${variant === 'golden' ? 'golden' : ''}`}
				type='range'
				min={min}
				max={max}
				value={value}
				style={{ width: '100%' }}
			/>
		</div>
	);
};

export default Sliders;
