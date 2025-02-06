import React from 'react';

const Button = ({ text, variant }) => {
	return (
		<div className='rpgui-container framed rpgui-draggable'>
			<button
				className={`rpgui-button ${variant}`}
				type='button'>
				<p className={variant === 'golden' ? 'relative top-3' : ''}>{text}</p>
			</button>
		</div>
	);
};

export default Button;
