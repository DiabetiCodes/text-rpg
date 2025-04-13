import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the original JSON file
const itemDataRaw = fs.readFileSync(
	path.join(dirname(__dirname), 'data/itemDescriptions.json'),
	'utf8'
);
const itemData = JSON.parse(itemDataRaw);

// Initialize our categorized objects
const weaponsAndShields = {};
const armorItems = {};
const foodAndMaterials = {};

// Process each item
for (const [itemId, item] of Object.entries(itemData)) {
	// Weapons and shields
	if (item.type === 'weapon' || item.type === 'shield') {
		weaponsAndShields[itemId] = item;
	}
	// Armor items (including accessories like charms and rings)
	else if (
		item.type === 'armor' ||
		(item.type === 'accessory' &&
			['amulet', 'charm', 'ring'].includes(item.subtype))
	) {
		armorItems[itemId] = item;
	}
	// Food and materials
	else if (
		item.type === 'consumable' ||
		item.type === 'material' ||
		item.type === 'gem'
	) {
		foodAndMaterials[itemId] = item;
	}
}

// Create directory if it doesn't exist
const splitDir = path.join(dirname(__dirname), 'data/split');
if (!fs.existsSync(splitDir)) {
	fs.mkdirSync(splitDir, { recursive: true });
}

// Write the files
fs.writeFileSync(
	path.join(splitDir, 'weaponsAndShields.json'),
	JSON.stringify(weaponsAndShields, null, 2)
);

fs.writeFileSync(
	path.join(splitDir, 'armorItems.json'),
	JSON.stringify(armorItems, null, 2)
);

fs.writeFileSync(
	path.join(splitDir, 'foodAndMaterials.json'),
	JSON.stringify(foodAndMaterials, null, 2)
);

console.log('Successfully split items into three files:');
console.log('1. src/data/split/weaponsAndShields.json');
console.log('2. src/data/split/armorItems.json');
console.log('3. src/data/split/foodAndMaterials.json');
