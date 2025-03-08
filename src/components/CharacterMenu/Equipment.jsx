import React from 'react';

const Equipment = ({ weaponSlot, shieldSlot, armorSlot, helmetSlot, ringSlot1, ringSlot2, ringSlot3, shoesSlot }) => {
	return (
		<div className='rpgui-container rpgui-draggable framed w-[350px] max-w-[350px]'>
			<div className='mx-auto text-center'>
				<h1>Equipment</h1>
				<hr />
				<div>
					<div class='rpgui-icon'></div>
					<div
						class={`rpgui-icon ${
							helmetSlot ? helmetSlot : 'helmet-slot'
						}`}></div>{' '}
					<div class='rpgui-icon'></div>
					<div class={`rpgui-icon ${ringSlot1 ? ringSlot1 : 'ring-slot'}`}></div>
				</div>
				<div>
					<div class={`rpgui-icon ${weaponSlot ? weaponSlot : 'weapon-slot'}`}></div>
					<div class={`rpgui-icon ${armorSlot ? armorSlot : 'armor-slot'}`}></div>
					<div class={`rpgui-icon ${shieldSlot ? shieldSlot : 'shield-slot'}`}></div>{' '}
					<div class={`rpgui-icon ${ringSlot2 ? ringSlot2 : 'ring-slot'}`}></div>
				</div>
				<div>
					<div class='rpgui-icon'></div>
					<div class={`rpgui-icon ${shoesSlot ? shoesSlot : 'shoes-slot'}`}></div>{' '}
					<div class='rpgui-icon'></div>
					<div class={`rpgui-icon ${ringSlot3 ? ringSlot3 : 'ring-slot'}`}></div>
				</div>
			</div>
		</div>
	);
};

export default Equipment;