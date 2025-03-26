import React from 'react';

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
					<div
						className={`rpgui-icon relative inline-block max-h-[80px] max-w-[80px] ${
							helmetSlot ? 'empty-slot has-item' : 'helmet-slot'
						}`}
						data-item={helmetSlot || 'helmet-slot'}></div>
					<div className='rpgui-icon'></div>
					<div
						className={`rpgui-icon relative inline-block max-h-[80px] max-w-[80px] ${
							ringSlot1 ? 'empty-slot has-item' : 'ring-slot'
						}`}
						data-item={ringSlot1 || 'ring-slot'}></div>
				</div>

				<div>
					<div
						className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							weaponSlot ? 'empty-slot has-item' : 'weapon-slot'
						}`}
						data-item={weaponSlot || 'weapon-slot'}></div>
					<div
						className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							armorSlot ? 'empty-slot has-item' : ''
						}`}
						data-item={armorSlot || 'armor-slot'}></div>
					<div
						className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							shieldSlot ? 'empty-slot has-item' : ''
						}`}
						data-item={shieldSlot || 'shield-slot'}></div>
					<div
						className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							ringSlot2 ? 'empty-slot has-item' : ''
						}`}
						data-item={ringSlot2 || 'ring-slot'}></div>
				</div>

				<div>
					<div className='rpgui-icon'></div>
					<div
						className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							shoesSlot ? 'empty-slot has-item' : ''
						}`}
						data-item={shoesSlot || 'shoes-slot'}></div>
					<div className='rpgui-icon'></div>
					<div
						className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							ringSlot3 ? 'empty-slot has-item' : ''
						}`}
						data-item={ringSlot3 || 'ring-slot'}></div>
				</div>
			</div>
		</div>
	);
};

export default Equipment;