import React, { useState } from 'react';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  
  const checkBoxHandler = () => {
		setChecked((prevChecked) => !prevChecked); // Toggle the checked state
	};
  
  return (
		<div className='rpgui-container framed rpgui-draggable w-[350px] max-w-[350px]'>
			<input className='rpgui-checkbox' type='checkbox' onClick={checkBoxHandler} checked={checked} />
			<label>{label}</label>
		</div>
	);
}

export default Checkbox