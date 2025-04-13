import { useEffect, useState } from 'react';
import itemDescriptions from '../data/itemDescriptions.json';

const useEquipmentSystem = (
	initialInventory = Array(16).fill(''),
	initialEquipment = {
		armorSlot: '',
		helmetSlot: '',
		ringSlot1: '',
		ringSlot2: '',
		ringSlot3: '',
		shieldSlot: '',
		shoesSlot: '',
		weaponSlot: '',
	}
) => {
	// State for inventory slots
	const [inventorySlots, setInventorySlots] = useState(initialInventory);

	// State for equipment slots
	const [equipmentSlots, setEquipmentSlots] = useState(initialEquipment);

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

	return {
		inventorySlots,
		setInventorySlots,
		equipmentSlots,
		setEquipmentSlots,
		handleInventoryItemClick,
		handleEquipmentItemClick,
	};
};

export default useEquipmentSystem;
