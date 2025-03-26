import React from 'react';
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
}) => {
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
							data-item={helmetSlot || 'helmet-slot'}></div>
					</ItemTooltip>

					<div className='rpgui-icon'></div>

					<ItemTooltip itemId={ringSlot1 || 'ring-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								ringSlot1 ? 'empty-slot has-item' : 'ring-slot'
							}`}
							data-item={ringSlot1 || 'ring-slot'}></div>
					</ItemTooltip>
				</div>

				<div>
					<ItemTooltip itemId={weaponSlot || 'weapon-slot'} position='right'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								weaponSlot ? 'empty-slot has-item' : 'weapon-slot'
							}`}
							data-item={weaponSlot || 'weapon-slot'}></div>
					</ItemTooltip>

					<ItemTooltip itemId={armorSlot || 'armor-slot'} position='bottom'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								armorSlot ? 'empty-slot has-item' : 'armor-slot'
							}`}
							data-item={armorSlot || 'armor-slot'}></div>
					</ItemTooltip>

					<ItemTooltip itemId={shieldSlot || 'shield-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								shieldSlot ? 'empty-slot has-item' : 'shield-slot'
							}`}
							data-item={shieldSlot || 'shield-slot'}></div>
					</ItemTooltip>

					<ItemTooltip itemId={ringSlot2 || 'ring-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								ringSlot2 ? 'empty-slot has-item' : 'ring-slot'
							}`}
							data-item={ringSlot2 || 'ring-slot'}></div>
					</ItemTooltip>
				</div>

				<div>
					<div className='rpgui-icon'></div>

					<ItemTooltip itemId={shoesSlot || 'shoes-slot'} position='top'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								shoesSlot ? 'empty-slot has-item' : 'shoes-slot'
							}`}
							data-item={shoesSlot || 'shoes-slot'}></div>
					</ItemTooltip>

					<div className='rpgui-icon'></div>

					<ItemTooltip itemId={ringSlot3 || 'ring-slot'} position='left'>
						<div
							className={`rpgui-icon rpgui-cursor-point relative inline-block max-h-[80px] max-w-[80px] ${
								ringSlot3 ? 'empty-slot has-item' : 'ring-slot'
							}`}
							data-item={ringSlot3 || 'ring-slot'}></div>
					</ItemTooltip>
				</div>
			</div>
		</div>
	);
};

export default Equipment;
