import React, { useState } from 'react';

const ItemTooltip = ({ children, itemId, position }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	// Only show tooltip if there's an actual item (not an empty slot)
	const isEmptySlot =
		!itemId ||
		itemId === 'helmet-slot' ||
		itemId === 'ring-slot' ||
		itemId === 'weapon-slot' ||
		itemId === 'armor-slot' ||
		itemId === 'shield-slot' ||
		itemId === 'shoes-slot';

	if (isEmptySlot) {
		return children;
	}

	return (
		<div
			className='relative inline-block'
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}>
			{children}

			{showTooltip && (
				<div
					className='absolute rpgui-container framed-golden z-50 p-2 w-[200px]'
					style={{
						[position === 'top'
							? 'bottom'
							: position === 'bottom'
							? 'top'
							: position === 'left'
							? 'right'
							: 'left']: '100%',
						[position === 'left' || position === 'right' ? 'top' : 'left']:
							'50%',
						transform:
							position === 'left' || position === 'right'
								? 'translateY(-50%)'
								: 'translateX(-50%)',
						pointerEvents: 'none', // This makes the tooltip "transparent" to mouse events
					}}>
					<h4>
						{itemId
							.split('-')
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ')}
					</h4>
					<p>Item description would go here.</p>
					<p>Stats: +5 Strength, +3 Agility</p>
				</div>
			)}
		</div>
	);
};

export default ItemTooltip;
