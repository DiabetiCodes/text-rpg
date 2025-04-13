import React, { useContext } from 'react';
import { TooltipContext } from '../../contexts/TooltipContext';
import ItemTooltip from '../Tooltips/ItemTooltip';

const Equipment = ({
	armorSlot,
	helmetSlot,
	ringSlot1,
	ringSlot2,
	ringSlot3,
	shieldSlot,
	shoesSlot,
	weaponSlot,
	onSlotClick,
}) => {
	const { closeAllTooltips } = useContext(TooltipContext);

	const handleSlotClick = (slotName) => {
		if (closeAllTooltips) closeAllTooltips(); // Close all tooltips before handling the click
		if (onSlotClick) {
			onSlotClick(slotName);
		}
	};

	return (
		<div
			className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px] max-h-[310px]'
			style={{ zIndex: 30 }}>
			<div className='mx-auto text-center'>
				<h1>Equipment</h1>
				<hr />
				{/* First row */}
				<div className='flex justify-center items-center'>
					<div className='rpgui-icon'></div>
					<ItemTooltip itemId={helmetSlot || 'helmet-slot'} position='bottom'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								helmetSlot ? 'empty-slot has-item' : 'helmet-slot'
							}`}
							data-item={helmetSlot || 'helmet-slot'}
							onClick={() => helmetSlot && handleSlotClick('helmetSlot')}></div>
					</ItemTooltip>
					<div className='rpgui-icon'></div>
					<ItemTooltip itemId={ringSlot1 || 'ring-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								ringSlot1 ? 'empty-slot has-item' : 'ring-slot'
							}`}
							data-item={ringSlot1 || 'ring-slot'}
							onClick={() => ringSlot1 && handleSlotClick('ringSlot1')}></div>
					</ItemTooltip>
				</div>
				{/* Second row */}
				<div className='flex justify-center items-center mt-2'>
					<ItemTooltip itemId={weaponSlot || 'weapon-slot'} position='right'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								weaponSlot ? 'empty-slot has-item' : 'weapon-slot'
							}`}
							data-item={weaponSlot || 'weapon-slot'}
							onClick={() => weaponSlot && handleSlotClick('weaponSlot')}></div>
					</ItemTooltip>
					<ItemTooltip itemId={armorSlot || 'armor-slot'} position='bottom'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								armorSlot ? 'empty-slot has-item' : 'armor-slot'
							}`}
							data-item={armorSlot || 'armor-slot'}
							onClick={() => armorSlot && handleSlotClick('armorSlot')}></div>
					</ItemTooltip>
					<ItemTooltip itemId={shieldSlot || 'shield-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								shieldSlot ? 'empty-slot has-item' : 'shield-slot'
							}`}
							data-item={shieldSlot || 'shield-slot'}
							onClick={() => shieldSlot && handleSlotClick('shieldSlot')}></div>
					</ItemTooltip>
					<ItemTooltip itemId={ringSlot2 || 'ring-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								ringSlot2 ? 'empty-slot has-item' : 'ring-slot'
							}`}
							data-item={ringSlot2 || 'ring-slot'}
							onClick={() => ringSlot2 && handleSlotClick('ringSlot2')}></div>
					</ItemTooltip>
				</div>
				{/* Third row */}
				<div className='flex justify-center items-center mt-2'>
					<div className='rpgui-icon'></div>
					<ItemTooltip itemId={shoesSlot || 'shoes-slot'} position='top'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								shoesSlot ? 'empty-slot has-item' : 'shoes-slot'
							}`}
							data-item={shoesSlot || 'shoes-slot'}
							onClick={() => shoesSlot && handleSlotClick('shoesSlot')}></div>
					</ItemTooltip>
					<div className='rpgui-icon'></div>
					{/* Changed to magic-slot for charms */}
					<ItemTooltip itemId={ringSlot3 || 'magic-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								ringSlot3 ? 'empty-slot has-item' : 'magic-slot'
							}`}
							data-item={ringSlot3 || 'magic-slot'}
							onClick={() => ringSlot3 && handleSlotClick('ringSlot3')}></div>
					</ItemTooltip>
				</div>
			</div>
		</div>
	);
};

export default Equipment;
