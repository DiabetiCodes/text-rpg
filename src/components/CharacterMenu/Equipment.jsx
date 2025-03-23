import React from 'react';

const Equipment = ({ 
	armorSlot, 
	helmetSlot, 
	ringSlot1, 
	ringSlot2, 
	ringSlot3, 
	shieldSlot, 
	shoesSlot,
	weaponSlot
	}) => {
	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='mx-auto text-center'>
				<h1>Equipment</h1>
				<hr />
				<div>
					<div class='rpgui-icon'></div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							helmetSlot ? 'has-item' : ''
						}`}
						data-item={helmetSlot || 'helmet-slot'}></div>
					<div class='rpgui-icon'></div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							ringSlot1 ? 'has-item' : ''
						}`}
						data-item={ringSlot1 || 'ring-slot'}></div>
				</div>

				<div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							weaponSlot ? 'has-item' : ''
						}`}
						data-item={weaponSlot || 'weapon-slot'}></div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							armorSlot ? 'has-item' : ''
						}`}
						data-item={armorSlot || 'armor-slot'}></div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							shieldSlot ? 'has-item' : ''
						}`}
						data-item={shieldSlot || 'shield-slot'}></div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							ringSlot2 ? 'has-item' : ''
						}`}
						data-item={ringSlot2 || 'ring-slot'}></div>
				</div>

				<div>
					<div class='rpgui-icon'></div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							shoesSlot ? 'has-item' : ''
						}`}
						data-item={shoesSlot || 'shoes-slot'}></div>
					<div class='rpgui-icon'></div>
					<div
						class={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
							ringSlot3 ? 'has-item' : ''
						}`}
						data-item={ringSlot3 || 'ring-slot'}></div>
				</div>
			</div>
		</div>
	);
};

export default Equipment;