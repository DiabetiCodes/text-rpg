import React from 'react';

// empty-slot, potion-slot, magic-slot

const Inventory = ({ 
	itemSlot1, itemSlot2, itemSlot3, itemSlot4, 
	itemSlot5, itemSlot6, itemSlot7, itemSlot8,
	itemSlot9, itemSlot10, itemSlot11, itemSlot12
}) => {
	return (
		<div className='w-[400px] max-w-[400px] text-center m-auto'>
			<h1>Inventory</h1>
			<hr />
			<div class={`rpgui-icon ${itemSlot1}`}></div>
			<div class={`rpgui-icon ${itemSlot2}`}></div>
			<div class={`rpgui-icon ${itemSlot3}`}></div>
			<div class={`rpgui-icon ${itemSlot4}`}></div>
			<br />
			<br />
			<div class={`rpgui-icon ${itemSlot5}`}></div>
			<div class={`rpgui-icon ${itemSlot6}`}></div>
			<div class={`rpgui-icon ${itemSlot7}`}></div>
			<div class={`rpgui-icon ${itemSlot8}`}></div>
			<br />
			<br />
			<div class={`rpgui-icon ${itemSlot9}`}></div>
			<div class={`rpgui-icon ${itemSlot10}`}></div>
			<div class={`rpgui-icon ${itemSlot11}`}></div>
			<div class={`rpgui-icon ${itemSlot12}`}></div>
		</div>
	);
};

export default Inventory;
