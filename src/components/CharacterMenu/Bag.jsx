import React from 'react';
import itemDescriptions from '../../data/itemDescriptions.json';
import ItemTooltip from '../Tooltips/ItemTooltip';

const Bag = ({
	itemSlot1,
	itemSlot2,
	itemSlot3,
	itemSlot4,
	itemSlot5,
	itemSlot6,
	itemSlot7,
	itemSlot8,
	itemSlot9,
	itemSlot10,
	itemSlot11,
	itemSlot12,
	itemSlot13,
	itemSlot14,
	itemSlot15,
	itemSlot16,
}) => {
	// Function to check if an item is allowed in the bag
	const isAllowedInBag = (itemId) => {
		if (!itemId) return true; // Empty slots are allowed

		const item = itemDescriptions[itemId];
		if (!item) return false;

		// Only allow food, gems, and materials in the bag
		return (
			item.type === 'consumable' ||
			item.type === 'gem' ||
			item.type === 'material' ||
			item.type === 'currency' ||
			item.type === 'key' ||
			(item.type === 'misc' && !item.equipable)
		);
	};

	// Validate all slots
	const slots = [
		itemSlot1,
		itemSlot2,
		itemSlot3,
		itemSlot4,
		itemSlot5,
		itemSlot6,
		itemSlot7,
		itemSlot8,
		itemSlot9,
		itemSlot10,
		itemSlot11,
		itemSlot12,
		itemSlot13,
		itemSlot14,
		itemSlot15,
		itemSlot16,
	];

	// Filter out invalid items (in a real app, you might want to handle this differently)
	const validatedSlots = slots.map((slot) =>
		isAllowedInBag(slot) ? slot : ''
	);

	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='text-center m-auto'>
				<h1>Bag</h1>
				<hr />
				{/* Top row - tooltips appear below */}
				<ItemTooltip itemId={validatedSlots[0] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[0] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[0] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[1] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[1] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[1] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[2] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[2] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[2] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[3] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[3] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[3] || ''}></div>
				</ItemTooltip>
				<br />
				<br />
				{/* Middle row - tooltips appear below */}
				<ItemTooltip itemId={validatedSlots[4] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[4] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[4] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[5] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[5] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[5] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[6] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[6] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[6] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[7] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[7] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[7] || ''}></div>
				</ItemTooltip>
				<br />
				<br />
				<ItemTooltip itemId={validatedSlots[8] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[8] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[8] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[9] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[9] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[9] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[10] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[10] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[10] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[11] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[11] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[11] || ''}></div>
				</ItemTooltip>
				<br />
				<br />
				{/* Bottom row - tooltips appear above */}
				<ItemTooltip itemId={validatedSlots[12] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[12] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[12] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[13] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[13] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[13] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[14] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[14] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[14] || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[15] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[15] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[15] || ''}></div>
				</ItemTooltip>
			</div>
		</div>
	);
};

export default Bag;
