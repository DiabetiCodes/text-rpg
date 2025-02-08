import React from 'react';

const Equipment = ({ weaponSlot, shieldSlot, armorSlot, helmetSlot, ringSlot, magicSlot, shoesSlot }) => {
	return (
		<div className='rpgui-container rpgui-draggable framed w-[400px] max-w-[400px]'>
			<div className='mx-auto text-center'>
				<h1>Equipment</h1>
				<hr />
				<div class='rpgui-icon'></div> 
				<div class={`rpgui-icon ${helmetSlot}`}></div>
				<div class='rpgui-icon'></div>
				<div class='rpgui-icon'></div>
				<div class={`rpgui-icon ${ringSlot}`}></div>
				<br />
				<br />
				<div class={`rpgui-icon ${weaponSlot}`}></div>
				<div class={`rpgui-icon ${armorSlot}`}></div>
				<div class={`rpgui-icon ${shieldSlot}`}></div>
				<div class='rpgui-icon'></div>
				<div class={`rpgui-icon ${ringSlot}`}></div>
				<br />
				<br />
				<div class='rpgui-icon'></div>
				<div class={`rpgui-icon ${shoesSlot}`}></div>
				<div class='rpgui-icon'></div>
				<div class='rpgui-icon'></div>
				<div class={`rpgui-icon ${ringSlot}`}></div>
				<br />
			</div>
		</div>
	);
};

export default Equipment;
