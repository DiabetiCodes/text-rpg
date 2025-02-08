import React from 'react';

const Equipment = ({ weaponSlot, shieldSlot, armorSlot, helmetSlot, ringSlot, magicSlot, shoesSlot }) => {
	return (
		<div className='w-[400px] max-w-[400px] mx-auto'>
			<h1>Equipment</h1>
			<hr />
			<div class='rpgui-icon'></div>
			<div class='rpgui-icon helmet-slot'></div>
			<div class='rpgui-icon'></div>
			<br />
			<br />
			<div class='rpgui-icon shield-slot'></div>
			<div class='rpgui-icon armor-slot'></div>
			<div class='rpgui-icon weapon-slot'></div>
			<br />
      <br />
			<div class='rpgui-icon ring-slot'></div>
			<div class='rpgui-icon shoes-slot'></div>
			<div class='rpgui-icon ring-slot'></div>
			<br />
		</div>
	);
};

export default Equipment;
