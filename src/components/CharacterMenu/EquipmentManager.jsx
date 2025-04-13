import React, { useEffect, useState } from 'react';
import itemDescriptions from '../../data/itemDescriptions.json';
import Equipment from './Equipment';
import Inventory from './Inventory';

const EquipmentManager = () => {
	// State for inventory slots
	const [inventorySlots, setInventorySlots] = useState(Array(16).fill(''));

	// State for equipment slots
	const [equipmentSlots, setEquipmentSlots] = useState({
		armorSlot: '',
		helmetSlot: '',
		ringSlot1: '',
		ringSlot2: '',
		ringSlot3: '',
		shieldSlot: '',
		shoesSlot: '',
		weaponSlot: '',
	});

	// For demo purposes, let's add some items to inventory
	useEffect(() => {
		setInventorySlots([
			'iron-sword',
			'leather-cap',
			'leather-jacket',
			'leather-boots',
			'gold-ring',
			'ruby-ring',
			'steel-shield',
			'royal-ruby-ring',
			'mage-hat',
			'combat-suit',
			'archers-boots',
			'',
			'',
			'',
			'',
			'',
		]);
	}, []);

	// Determine the appropriate equipment slot for an item
	const getEquipmentSlotForItem = (itemId) => {
		if (!itemId) return null;

		const item = itemDescriptions[itemId];
		if (!item) return null;

		if (item.type === 'armor') {
			if (item.subtype === 'body') return 'armorSlot';
			if (item.subtype === 'head') return 'helmetSlot';
			if (item.subtype === 'feet') return 'shoesSlot';
		} else if (item.type === 'weapon') {
			return 'weaponSlot';
		} else if (item.type === 'shield') {
			// Check if a bow is equipped
			const equippedWeapon = itemDescriptions[equipmentSlots.weaponSlot];
			const isBowEquipped =
				equippedWeapon &&
				equippedWeapon.type === 'weapon' &&
				equippedWeapon.subtype === 'bow';

			return isBowEquipped ? null : 'shieldSlot';
		} else if (item.type === 'accessory' && item.subtype === 'ring') {
			// Find the first empty ring slot
			if (!equipmentSlots.ringSlot1) return 'ringSlot1';
			if (!equipmentSlots.ringSlot2) return 'ringSlot2';
			if (!equipmentSlots.ringSlot3) return 'ringSlot3';
			return 'ringSlot1'; // If all slots are full, replace the first one
		}

		return null;
	};

	// Handle clicking an inventory item
	const handleInventoryItemClick = (slotIndex) => {
		const itemId = inventorySlots[slotIndex];
		if (!itemId) return; // Empty slot

		const targetSlot = getEquipmentSlotForItem(itemId);
		if (!targetSlot) return; // No valid equipment slot

		// If there's already an item in the target slot, swap them
		const currentEquippedItem = equipmentSlots[targetSlot];

		// Create new inventory array with the clicked item removed
		const newInventorySlots = [...inventorySlots];
		newInventorySlots[slotIndex] = currentEquippedItem; // Replace with currently equipped item (or empty)

		// Update equipment slots
		const newEquipmentSlots = { ...equipmentSlots };
		newEquipmentSlots[targetSlot] = itemId;

		// If equipping a bow, unequip the shield
		if (targetSlot === 'weaponSlot') {
			const item = itemDescriptions[itemId];
			if (
				item &&
				item.type === 'weapon' &&
				item.subtype === 'bow' &&
				equipmentSlots.shieldSlot
			) {
				// Find first empty inventory slot for the shield
				const emptySlotIndex = newInventorySlots.findIndex((slot) => !slot);
				if (emptySlotIndex !== -1) {
					newInventorySlots[emptySlotIndex] = equipmentSlots.shieldSlot;
					newEquipmentSlots.shieldSlot = '';
				}
			}
		}

		setInventorySlots(newInventorySlots);
		setEquipmentSlots(newEquipmentSlots);
	};

	// Handle clicking an equipment item
	const handleEquipmentItemClick = (slotName) => {
		const itemId = equipmentSlots[slotName];
		if (!itemId) return; // Empty slot

		// Find first empty inventory slot
		const emptySlotIndex = inventorySlots.findIndex((slot) => !slot);
		if (emptySlotIndex === -1) return; // No empty slots in inventory

		// Create new inventory array with the equipped item added
		const newInventorySlots = [...inventorySlots];
		newInventorySlots[emptySlotIndex] = itemId;

		// Update equipment slots
		const newEquipmentSlots = { ...equipmentSlots };
		newEquipmentSlots[slotName] = '';

		setInventorySlots(newInventorySlots);
		setEquipmentSlots(newEquipmentSlots);
	};

	return (
		<div className='flex gap-4'>
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
		</div>
	);
};

export default EquipmentManager;
