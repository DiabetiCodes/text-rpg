import React from 'react';

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
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot1 ? 'has-item' : ''
					}`}
					data-item={itemSlot1 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot2 ? 'has-item' : ''
					}`}
					data-item={itemSlot2 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot3 ? 'has-item' : ''
					}`}
					data-item={itemSlot3 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot4 ? 'has-item' : ''
					}`}
					data-item={itemSlot4 || ''}></div>
				<br />
				<br />
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot5 ? 'has-item' : ''
					}`}
					data-item={itemSlot5 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot6 ? 'has-item' : ''
					}`}
					data-item={itemSlot6 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot7 ? 'has-item' : ''
					}`}
					data-item={itemSlot7 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot8 ? 'has-item' : ''
					}`}
					data-item={itemSlot8 || ''}></div>
				<br />
				<br />
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot9 ? 'has-item' : ''
					}`}
					data-item={itemSlot9 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot10 ? 'has-item' : ''
					}`}
					data-item={itemSlot10 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot11 ? 'has-item' : ''
					}`}
					data-item={itemSlot11 || ''}></div>
				<div
					className={`rpgui-icon empty-slot relative inline-block max-h-[80px] max-w-[80px] ${
						itemSlot12 ? 'has-item' : ''
					}`}
					data-item={itemSlot12 || ''}></div>
			</div>
		</div>
	);
};

export default Inventory;
