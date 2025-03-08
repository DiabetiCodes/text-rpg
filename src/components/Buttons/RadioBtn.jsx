import React, { useState } from 'react';

const RadioBtn = ({ label, values }) => {
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event) => {
		setSelectedValue(event.target.value); // Update the selected value to the clicked radio button
	};

	return (
		<div className='rpgui-container framed rpgui-draggable w-[350px] max-w-[350px]'>
			<form action=''>
				<label>{label}</label>
				<br />
				{values.map((value, index) => (
					<div key={index}>
						<input
							className='rpgui-radio'
							type='radio'
							name={label} // Use label as the name for grouping
							value={values[index]}
							checked={selectedValue === value} // Check if this option is selected
							onChange={handleChange} // Call handleChange on click
						/>
						<label>{value}</label>
						<br />
					</div>
				))}
			</form>
		</div>
	);
};

export default RadioBtn;
