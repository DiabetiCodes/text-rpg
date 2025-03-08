import React from 'react';

const Button = ({ text, variant }) => {
	return (
		<div className='rpgui-container framed rpgui-draggable w-[350px] max-w-[350px]'>
			<button
				className={`rpgui-button ${variant}`}
				type='button'>
				<p>{text}</p>
			</button>
		</div>
	);
};

export default Button;
