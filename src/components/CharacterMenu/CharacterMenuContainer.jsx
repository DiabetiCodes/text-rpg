import React from 'react';
import Bag from './Bag';
import Equipment from './Equipment';
import Inventory from './Inventory';

const CharacterMenuContainer = ({
	showEquipment,
	showInventory,
	showBag,
	equipmentProps,
	inventoryProps,
	bagProps,
}) => {
	return (
		<div className='character-menu-container'>
			{showEquipment && (
				<div
					style={{
						position: 'absolute',
						top: '50px',
						left: '50px',
						zIndex: 12,
					}}>
					<Equipment {...equipmentProps} />
				</div>
			)}

			{showInventory && (
				<div
					style={{
						position: 'absolute',
						top: '50px',
						left: '420px',
						zIndex: 11,
					}}>
					<Inventory {...inventoryProps} />
				</div>
			)}

			{showBag && (
				<div
					style={{
						position: 'absolute',
						top: '380px',
						left: '50px',
						zIndex: 10,
					}}>
					<Bag {...bagProps} />
				</div>
			)}
		</div>
	);
};

export default CharacterMenuContainer;
