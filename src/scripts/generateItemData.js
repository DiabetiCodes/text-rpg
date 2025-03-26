/**
 * This script extracts item IDs from the CSS file and generates a JSON file
 * with structured item data.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the CSS file
const cssFilePath = path.join(__dirname, '../icons.css');
const cssContent = fs.readFileSync(cssFilePath, 'utf8');

// Regular expression to match item selectors
const itemRegex = /\.rpgui-icon\.empty-slot\[data-item='([^']+)'\]::after/g;

// Extract all item IDs
const itemIds = [];
let match;
while ((match = itemRegex.exec(cssContent)) !== null) {
	itemIds.push(match[1]);
}

// Create a JSON object with the extracted item IDs
const itemData = {};

// Helper function to convert kebab-case to Title Case
const toTitleCase = (str) => {
	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

// Categorize items based on their path in the CSS
const categorizeItem = (itemId) => {
	if (itemId.includes('amulet'))
		return { type: 'accessory', subtype: 'amulet', equipable: true };
	if (itemId.includes('charm'))
		return { type: 'accessory', subtype: 'charm', equipable: true };
	if (itemId.includes('ring'))
		return { type: 'accessory', subtype: 'ring', equipable: true };

	if (
		itemId.includes('helmet') ||
		itemId.includes('hat') ||
		itemId.includes('hood') ||
		itemId.includes('cap') ||
		itemId.includes('kabuto')
	)
		return { type: 'armor', subtype: 'head', equipable: true };

	if (
		itemId.includes('boots') ||
		itemId.includes('shoes') ||
		itemId.includes('grieves') ||
		itemId.includes('suneate')
	)
		return { type: 'armor', subtype: 'feet', equipable: true };

	if (
		itemId.includes('gloves') ||
		itemId.includes('bracers') ||
		itemId.includes('sleeves') ||
		itemId.includes('kote')
	)
		return { type: 'armor', subtype: 'hands', equipable: true };

	if (
		itemId.includes('cuirass') ||
		itemId.includes('chestplate') ||
		itemId.includes('suit') ||
		itemId.includes('mail') ||
		itemId.includes('cloak') ||
		itemId.includes('jacket') ||
		itemId.includes('cape') ||
		itemId.includes('vest') ||
		itemId.includes('breastplate') ||
		itemId.includes('shirt') ||
		itemId.includes('do')
	)
		return { type: 'armor', subtype: 'body', equipable: true };

	if (itemId.includes('shield')) return { type: 'shield', equipable: true };

	if (itemId.includes('potion'))
		return { type: 'consumable', subtype: 'potion', consumable: true };

	if (
		itemId.includes('leaf') ||
		itemId.includes('stalk') ||
		itemId.includes('bulb') ||
		itemId.includes('bush') ||
		itemId.includes('plant') ||
		itemId.includes('sprout') ||
		itemId.includes('grass') ||
		itemId.includes('mushroom') ||
		itemId.includes('flower') ||
		itemId.includes('wilt') ||
		itemId.includes('worm')
	)
		return { type: 'consumable', subtype: 'food', consumable: true };

	if (itemId.includes('coin')) return { type: 'currency', consumable: false };

	if (itemId.includes('diamond') || itemId.includes('stone'))
		return { type: 'gem', consumable: false };

	if (
		itemId.includes('key') ||
		itemId.includes('tablet') ||
		itemId.includes('scroll')
	)
		return { type: 'key', consumable: false };

	if (
		itemId.includes('bone') ||
		itemId.includes('bar') ||
		itemId.includes('mound') ||
		itemId.includes('root') ||
		itemId.includes('raw-') ||
		itemId.includes('stone') ||
		itemId.includes('wood')
	)
		return { type: 'material', consumable: false };

	if (
		itemId.includes('hammer') ||
		itemId.includes('pickaxe') ||
		itemId.includes('rope') ||
		itemId.includes('shovel')
	)
		return { type: 'tool', equipable: true };

	if (itemId.includes('axe'))
		return { type: 'weapon', subtype: 'axe', equipable: true };
	if (itemId.includes('bow'))
		return { type: 'weapon', subtype: 'bow', equipable: true };
	if (itemId.includes('crossbow'))
		return { type: 'weapon', subtype: 'crossbow', equipable: true };
	if (
		itemId.includes('club') ||
		itemId.includes('mace') ||
		itemId.includes('star')
	)
		return { type: 'weapon', subtype: 'club', equipable: true };
	if (itemId.includes('mjolnir'))
		return { type: 'weapon', subtype: 'hammer', equipable: true };
	if (itemId.includes('spear') || itemId.includes('scythe'))
		return { type: 'weapon', subtype: 'spear', equipable: true };
	if (itemId.includes('staff') || itemId.includes('rod'))
		return { type: 'weapon', subtype: 'staff', equipable: true };
	if (
		itemId.includes('sword') ||
		itemId.includes('blade') ||
		itemId.includes('apocalypse') ||
		itemId.includes('defender') ||
		itemId.includes('durendal') ||
		itemId.includes('excalibur') ||
		itemId.includes('nightmare') ||
		itemId.includes('ragnarok') ||
		itemId.includes('save-the-king') ||
		itemId.includes('save-the-queen')
	)
		return { type: 'weapon', subtype: 'sword', equipable: true };

	// Default case
	return { type: 'misc', consumable: false };
};

// Generate placeholder stats based on item type
const generatePlaceholderStats = (itemId, category) => {
	const stats = {};

	if (category.type === 'weapon') {
		stats.attack = Math.floor(Math.random() * 20) + 5;
		stats.durability = Math.floor(Math.random() * 100) + 50;

		if (category.subtype === 'sword') {
			stats.slashDamage = Math.floor(Math.random() * 10) + 5;
		} else if (category.subtype === 'axe') {
			stats.criticalChance = Math.floor(Math.random() * 10) + 5;
		} else if (category.subtype === 'bow' || category.subtype === 'crossbow') {
			stats.range = Math.floor(Math.random() * 5) + 5;
			stats.accuracy = Math.floor(Math.random() * 10) + 80;
		} else if (category.subtype === 'staff') {
			stats.magicPower = Math.floor(Math.random() * 15) + 10;
			stats.manaBoost = Math.floor(Math.random() * 20) + 10;
		}
	} else if (category.type === 'armor') {
		stats.defense = Math.floor(Math.random() * 10) + 2;
		stats.durability = Math.floor(Math.random() * 80) + 40;

		if (category.subtype === 'head') {
			stats.perception = Math.floor(Math.random() * 5) + 1;
		} else if (category.subtype === 'body') {
			stats.healthBoost = Math.floor(Math.random() * 15) + 5;
		} else if (category.subtype === 'hands') {
			stats.dexterity = Math.floor(Math.random() * 5) + 1;
		} else if (category.subtype === 'feet') {
			stats.speed = Math.floor(Math.random() * 5) + 1;
		}
	} else if (category.type === 'shield') {
		stats.blockChance = Math.floor(Math.random() * 20) + 10;
		stats.defense = Math.floor(Math.random() * 8) + 3;
		stats.durability = Math.floor(Math.random() * 90) + 40;
	} else if (category.type === 'accessory') {
		if (category.subtype === 'ring') {
			if (itemId.includes('hp')) {
				stats.healthBoost = Math.floor(Math.random() * 20) + 10;
			} else if (itemId.includes('mp')) {
				stats.manaBoost = Math.floor(Math.random() * 20) + 10;
			} else if (itemId.includes('xp')) {
				stats.experienceBoost = Math.floor(Math.random() * 10) + 5;
			} else {
				stats.magicResistance = Math.floor(Math.random() * 10) + 5;
			}
		} else if (category.subtype === 'amulet') {
			stats.magicPower = Math.floor(Math.random() * 10) + 5;
			stats.elementalResistance = Math.floor(Math.random() * 15) + 5;
		} else if (category.subtype === 'charm') {
			stats.luck = Math.floor(Math.random() * 10) + 5;
			stats.charisma = Math.floor(Math.random() * 8) + 3;
		}
	} else if (category.type === 'consumable') {
		if (category.subtype === 'potion') {
			if (itemId.includes('health') || itemId.includes('life')) {
				stats.healing = Math.floor(Math.random() * 50) + 20;
			} else if (itemId.includes('mana')) {
				stats.manaRestore = Math.floor(Math.random() * 50) + 20;
			} else if (itemId.includes('endurance')) {
				stats.staminaRestore = Math.floor(Math.random() * 50) + 20;
			} else if (itemId.includes('exp')) {
				stats.experienceBoost = Math.floor(Math.random() * 100) + 50;
			} else {
				stats.effect = 'Special effect';
				stats.duration = Math.floor(Math.random() * 60) + 30;
			}
		} else if (category.subtype === 'food') {
			stats.nutrition = Math.floor(Math.random() * 20) + 5;
			stats.healthRestore = Math.floor(Math.random() * 10) + 2;
		}
	}

	return stats;
};

// Determine rarity based on item name and type
const determineRarity = (itemId, category) => {
	if (
		itemId.includes('royal') ||
		itemId.includes('excalibur') ||
		itemId.includes('ragnarok') ||
		itemId.includes('apocalypse') ||
		itemId.includes('save-the-king') ||
		itemId.includes('save-the-queen') ||
		itemId.includes('mjolnir')
	) {
		return 'Legendary';
	} else if (
		itemId.includes('mythril') ||
		itemId.includes('ruby') ||
		itemId.includes('emerald') ||
		itemId.includes('diamond') ||
		itemId.includes('opal') ||
		itemId.includes('amethyst') ||
		itemId.includes('garnet')
	) {
		return 'Epic';
	} else if (
		itemId.includes('gold') ||
		itemId.includes('silver') ||
		itemId.includes('paladin') ||
		itemId.includes('knight') ||
		itemId.includes('colonel') ||
		itemId.includes('captain')
	) {
		return 'Rare';
	} else if (
		itemId.includes('iron') ||
		itemId.includes('steel') ||
		itemId.includes('leather') ||
		itemId.includes('wood')
	) {
		return 'Common';
	} else {
		return 'Uncommon';
	}
};

// Generate item data for each item ID
itemIds.forEach((itemId) => {
	const category = categorizeItem(itemId);
	const stats = generatePlaceholderStats(itemId, category);
	const rarity = determineRarity(itemId, category);

	itemData[itemId] = {
		name: toTitleCase(itemId),
		description: `A ${rarity.toLowerCase()} ${category.type}${
			category.subtype ? ' (' + category.subtype + ')' : ''
		}.`,
		stats: stats,
		rarity: rarity,
		...category,
	};
});

// Write the JSON file
const outputPath = path.join(__dirname, '../data/itemDescriptions.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(itemData, null, 2));

console.log(`Generated item data for ${itemIds.length} items in ${outputPath}`);
