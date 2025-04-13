import React, { useState, useContext } from 'react';
import Equipment from './components/CharacterMenu/Equipment.jsx';
import Inventory from './components/CharacterMenu/Inventory.jsx';
import Bag from './components/CharacterMenu/Bag.jsx';
import { TooltipContext } from './contexts/TooltipContext';
import useEquipmentSystem from './hooks/useEquipmentSystem';

const Game = () => {
	const [showEquipment, setShowEquipment] = useState(true);
	const [showInventory, setShowInventory] = useState(true);
	const [showBag, setShowBag] = useState(true);

	const tooltipContext = useContext(TooltipContext);

	const {
		inventorySlots,
		equipmentSlots,
		handleInventoryItemClick,
		handleEquipmentItemClick,
	} = useEquipmentSystem([
		'brigadier-cuirass',
		'carbon-ring',
		'blood-heart-charm',
		'echo-screen-charm',
		'amethyst-amulet',
		'royal-ruby-amulet',
		'darkness-potion',
		'health-potion',
		'cherry-bulb',
		'bore-stalk',
		'emerald-bar',
		'raw-bronze',
		'',
		'',
		'',
		'',
	]);

	return (
		<div className='rpgui-content'>
			{/* Game controls */}
			<div className='flex gap-4 mb-4'>
				<button
					className='rpgui-button'
					onClick={() => setShowEquipment(!showEquipment)}>
					{showEquipment ? 'Hide Equipment' : 'Show Equipment'}
				</button>
				<button
					className='rpgui-button'
					onClick={() => setShowInventory(!showInventory)}>
					{showInventory ? 'Hide Inventory' : 'Show Inventory'}
				</button>
				<button className='rpgui-button' onClick={() => setShowBag(!showBag)}>
					{showBag ? 'Hide Bag' : 'Show Bag'}
				</button>
			</div>

			{/* Components container - IMPORTANT: This flex container controls the layout */}
			<div className='flex flex-row flex-wrap gap-4'>
				{showEquipment && (
					<Equipment
						armorSlot={equipmentSlots.armorSlot}
						helmetSlot={equipmentSlots.helmetSlot}
						ringSlot1={equipmentSlots.ringSlot1}
						ringSlot2={equipmentSlots.ringSlot2}
						ringSlot3={equipmentSlots.ringSlot3}
						shieldSlot={equipmentSlots.shieldSlot}
						shoesSlot={equipmentSlots.shoesSlot}
						weaponSlot={equipmentSlots.weaponSlot}
						onSlotClick={handleEquipmentItemClick}
					/>
				)}

				{showInventory && (
					<Inventory
						itemSlot1={inventorySlots[0]}
						itemSlot2={inventorySlots[1]}
						itemSlot3={inventorySlots[2]}
						itemSlot4={inventorySlots[3]}
						itemSlot5={inventorySlots[4]}
						itemSlot6={inventorySlots[5]}
						itemSlot7={inventorySlots[6]}
						itemSlot8={inventorySlots[7]}
						itemSlot9={inventorySlots[8]}
						itemSlot10={inventorySlots[9]}
						itemSlot11={inventorySlots[10]}
						itemSlot12={inventorySlots[11]}
						itemSlot13={inventorySlots[12]}
						itemSlot14={inventorySlots[13]}
						itemSlot15={inventorySlots[14]}
						itemSlot16={inventorySlots[15]}
						onSlotClick={handleInventoryItemClick}
					/>
				)}

				{showBag && (
					<Bag
						itemSlot1='brigadier-cuirass'
						itemSlot2='carbon-ring'
						itemSlot3='blood-heart-charm'
						itemSlot4='echo-screen-charm'
						itemSlot5='amethyst-amulet'
						itemSlot6='royal-ruby-amulet'
						itemSlot7='darkness-potion'
						itemSlot8='health-potion'
						itemSlot9='cherry-bulb'
						itemSlot10='bore-stalk'
						itemSlot11='emerald-bar'
						itemSlot12='raw-bronze'
					/>
				)}
			</div>
		</div>
	);
};

export default Game;
