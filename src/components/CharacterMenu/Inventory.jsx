import React from 'react';
import itemDescriptions from '../../data/itemDescriptions.json';
import ItemTooltip from '../Tooltips/ItemTooltip';

const Inventory = ({
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
	onSlotClick,
}) => {
	// Function to check if an item is allowed in the inventory
	const isAllowedInInventory = (itemId) => {
		if (!itemId) return true; // Empty slots are allowed

		const item = itemDescriptions[itemId];
		if (!item) return false;

		// Only allow weapons, armor, rings, amulets, and charms in the inventory
		return (
			item.type === 'weapon' ||
			item.type === 'armor' ||
			item.type === 'shield' ||
			(item.type === 'accessory' &&
				['ring', 'amulet', 'charm'].includes(item.subtype)) ||
			(item.type === 'misc' && item.equipable)
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

	// Filter out invalid items
	const validatedSlots = slots.map((slot) =>
		isAllowedInInventory(slot) ? slot : ''
	);

	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='text-center m-auto'>
				<h1>Inventory</h1>
				<hr />
				{/* Top row - tooltips appear below */}
				<ItemTooltip itemId={validatedSlots[0] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[0] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[0] || ''}
						onClick={() =>
							validatedSlots[0] && onSlotClick && onSlotClick(0)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[1] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[1] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[1] || ''}
						onClick={() =>
							validatedSlots[1] && onSlotClick && onSlotClick(1)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[2] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[2] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[2] || ''}
						onClick={() =>
							validatedSlots[2] && onSlotClick && onSlotClick(2)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[3] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[3] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[3] || ''}
						onClick={() =>
							validatedSlots[3] && onSlotClick && onSlotClick(3)
						}></div>
				</ItemTooltip>
				<br />
				<br />
				{/* Middle row - tooltips appear below */}
				<ItemTooltip itemId={validatedSlots[4] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[4] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[4] || ''}
						onClick={() =>
							validatedSlots[4] && onSlotClick && onSlotClick(4)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[5] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[5] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[5] || ''}
						onClick={() =>
							validatedSlots[5] && onSlotClick && onSlotClick(5)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[6] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[6] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[6] || ''}
						onClick={() =>
							validatedSlots[6] && onSlotClick && onSlotClick(6)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[7] || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[7] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[7] || ''}
						onClick={() =>
							validatedSlots[7] && onSlotClick && onSlotClick(7)
						}></div>
				</ItemTooltip>
				<br />
				<br />
				<ItemTooltip itemId={validatedSlots[8] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[8] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[8] || ''}
						onClick={() =>
							validatedSlots[8] && onSlotClick && onSlotClick(8)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[9] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[9] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[9] || ''}
						onClick={() =>
							validatedSlots[9] && onSlotClick && onSlotClick(9)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[10] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[10] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[10] || ''}
						onClick={() =>
							validatedSlots[10] && onSlotClick && onSlotClick(10)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[11] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[11] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[11] || ''}
						onClick={() =>
							validatedSlots[11] && onSlotClick && onSlotClick(11)
						}></div>
				</ItemTooltip>
				<br />
				<br />
				{/* Bottom row - tooltips appear above */}
				<ItemTooltip itemId={validatedSlots[12] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[12] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[12] || ''}
						onClick={() =>
							validatedSlots[12] && onSlotClick && onSlotClick(12)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[13] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[13] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[13] || ''}
						onClick={() =>
							validatedSlots[13] && onSlotClick && onSlotClick(13)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[14] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[14] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[14] || ''}
						onClick={() =>
							validatedSlots[14] && onSlotClick && onSlotClick(14)
						}></div>
				</ItemTooltip>
				<ItemTooltip itemId={validatedSlots[15] || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							validatedSlots[15] ? 'has-item' : ''
						}`}
						data-item={validatedSlots[15] || ''}
						onClick={() =>
							validatedSlots[15] && onSlotClick && onSlotClick(15)
						}></div>
				</ItemTooltip>
			</div>
		</div>
	);
};

export default Inventory;
