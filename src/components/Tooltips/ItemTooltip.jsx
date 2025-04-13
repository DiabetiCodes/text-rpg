import React, { useContext } from 'react';
import { TooltipContext } from '../../contexts/TooltipContext';
import itemDescriptions from '../../data/itemDescriptions.json';

const ItemTooltip = ({ itemId, position, children }) => {
	const { activeTooltip, showTooltip, hideTooltip } =
		useContext(TooltipContext);
	const isVisible = activeTooltip === itemId;

	// Skip rendering tooltip content for empty slots or slot placeholders
	if (!itemId || itemId.endsWith('-slot')) {
		return <div onMouseEnter={() => hideTooltip()}>{children}</div>;
	}

	const item = itemDescriptions[itemId];
	if (!item) {
		return <div onMouseEnter={() => hideTooltip()}>{children}</div>;
	}

	// Determine tooltip position classes
	const positionClasses = {
		top: 'bottom-full mb-2',
		bottom: 'top-full mt-2',
		left: 'right-full mr-2',
		right: 'left-full ml-2',
	};
	const positionClass = positionClasses[position] || positionClasses.bottom;

	return (
		<div
			className='relative inline-block'
			onMouseEnter={() => showTooltip(itemId)}
			onMouseLeave={() => hideTooltip()}>
			{children}
			{isVisible && (
				<div
					className={`absolute ${positionClass} w-64 p-2 rpgui-container framed`}
					style={{
						zIndex: 9999,
						position: 'absolute',
						pointerEvents: 'none', // This ensures tooltips don't interfere with clicks
					}}>
					<h4 className='text-lg font-bold'>{item.name}</h4>
					<p className='text-sm'>{item.description}</p>
					{item.stats && Object.keys(item.stats).length > 0 && (
						<div className='mt-2'>
							<h5 className='text-sm font-bold'>Stats:</h5>
							<ul className='text-xs'>
								{Object.entries(item.stats).map(([stat, value]) => (
									<li key={stat}>
										{stat
											.replace(/([A-Z])/g, ' $1')
											.replace(/^./, (str) => str.toUpperCase())}
										: {value}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ItemTooltip;
