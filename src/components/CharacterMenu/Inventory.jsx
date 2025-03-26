import React from 'react';
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
}) => {
	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='text-center m-auto'>
				<h1>Inventory</h1>
				<hr />
				{/* Top row - tooltips appear below */}
				<ItemTooltip itemId={itemSlot1 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot1 ? 'has-item' : ''
						}`}
						data-item={itemSlot1 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot2 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot2 ? 'has-item' : ''
						}`}
						data-item={itemSlot2 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot3 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot3 ? 'has-item' : ''
						}`}
						data-item={itemSlot3 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot4 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot4 ? 'has-item' : ''
						}`}
						data-item={itemSlot4 || ''}></div>
				</ItemTooltip>
				<br />
				<br />
				{/* Middle row - tooltips appear below */}
				<ItemTooltip itemId={itemSlot5 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot5 ? 'has-item' : ''
						}`}
						data-item={itemSlot5 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot6 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot6 ? 'has-item' : ''
						}`}
						data-item={itemSlot6 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot7 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot7 ? 'has-item' : ''
						}`}
						data-item={itemSlot7 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot8 || ''} position='bottom'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot8 ? 'has-item' : ''
						}`}
						data-item={itemSlot8 || ''}></div>
				</ItemTooltip>
				<br />
				<br />
				{/* Bottom row - tooltips appear above */}
				<ItemTooltip itemId={itemSlot9 || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot9 ? 'has-item' : ''
						}`}
						data-item={itemSlot9 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot10 || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot10 ? 'has-item' : ''
						}`}
						data-item={itemSlot10 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot11 || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot11 ? 'has-item' : ''
						}`}
						data-item={itemSlot11 || ''}></div>
				</ItemTooltip>
				<ItemTooltip itemId={itemSlot12 || ''} position='top'>
					<div
						className={`rpgui-icon rpgui-cursor-point empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							itemSlot12 ? 'has-item' : ''
						}`}
						data-item={itemSlot12 || ''}></div>
				</ItemTooltip>
			</div>
		</div>
	);
};

export default Inventory;
