import React, { useContext } from 'react';
import { TooltipContext } from '../../TooltipContext';
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
		closeAllTooltips(); // Close all tooltips before handling the click
		if (onSlotClick) {
			onSlotClick(slotName);
		}
	};

	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='mx-auto text-center'>
				<h1>Equipment</h1>
				<hr />
				<div>
					<div className='rpgui-icon'></div>

					<ItemTooltip itemId={helmetSlot || 'helmet-slot'} position='bottom'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								helmetSlot ? 'empty-slot has-item' : 'helmet-slot'
							}`}
							data-item={helmetSlot || 'helmet-slot'}
							onClick={() => helmetSlot && handleSlotClick('helmetSlot')}></div>
					</ItemTooltip>

					{/* Rest of the component remains the same, just replace all onSlotClick calls with handleSlotClick */}
					{/* ... */}
				</div>
			</div>
		</div>
	);
};

export default Equipment;
