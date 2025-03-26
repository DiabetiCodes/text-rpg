import React, { useState } from 'react';

const Tooltip = ({ children, content, position = 'top', width = 200 }) => {
	const [isVisible, setIsVisible] = useState(false);

	// Calculate position classes based on the position prop
	const getPositionClasses = () => {
		switch (position) {
			case 'top':
				return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
			case 'bottom':
				return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
			case 'left':
				return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
			case 'right':
				return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
			default:
				return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
		}
	};

	return (
		<div
			className='relative inline-block'
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}>
			{children}

			{isVisible && (
				<div
					className={`absolute z-50 ${getPositionClasses()}`}
					style={{ width: `${width}px` }}>
					<div className='rpgui-container framed-golden-2 p-2 text-left'>
						<div className='text-white text-sm leading-tight'>{content}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Tooltip;
