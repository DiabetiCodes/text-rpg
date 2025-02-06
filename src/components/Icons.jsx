import React from 'react';
	
const Icons = ({ type }) => {

const axeWeapons = [
	'battle-axe',
	'earthbreaker',
	'giant-axe',
	'great-axe',
	'ogre-killer',
	'rune-axe',
	'titans-axe'
]

const bowWeapons = [
	'ember-bow',
	'forest-bow',
	'gust-bow',
	'long-bow',
	'mythril-bow',
	'tide-bow',
]

const clubWeapons = [
	'mace',
	'morning-star',
	'spiked-club',
]

const hammerWeapons = [
	'mjolnir',
]

const spearWeapons = [
	'scythe',
	'wood-spear'
]

const staveWeapons = [
	'healing-rod',
	'life-rod',
	'oak-staff',
	'sorcerer-staff',
	'fate-sealer'
]

const swordWeapons = [
	'apocalypse',
	'bastard-sword',
	'buster-sword',
	'chaos-blade',
	'defender',
	'durendal',
	'excalibur',
	'grand-sword',
	'iron-sword',
	'long-sword',
	'nightmare',
	'ragnarok',
	'rune-blade',
	'save-the-king',
	'save-the-queen',
	'short-sword',
	'stone-claymore',
	'stone-saber',
];


	return (
		<div className='w-[400px] max-w-[400px] mx-auto'>
			<h1>Icons</h1>
			<hr />
			<div className={`rpgui-icon apocalypse`}></div>
			<div className={`rpgui-icon bastard-sword`}></div>
			<div className={`rpgui-icon buster-sword`}></div>
			<br />
			<br />
			<div className='rpgui-icon chaos-blade'></div>
			<div className='rpgui-icon defender'></div>
			<div className='rpgui-icon durendal'></div>
			<br />
			<br />
			<div className='rpgui-icon excalibur'></div>
			<div className='rpgui-icon grand-sword'></div>
			<div className='rpgui-icon iron-sword'></div>
			<br />
			<br />
			<div className='rpgui-icon long-sword'></div>
			<div className='rpgui-icon nightmare'></div>
			<div className='rpgui-icon ragnarok'></div>
			<br />
			<br />
			<div className='rpgui-icon rune-blade'></div>
			<div className='rpgui-icon save-the-king'></div>
			<div className='rpgui-icon save-the-queen'></div>
			<br />
			<br />
			<div className='rpgui-icon short-sword'></div>
			<div className='rpgui-icon stone-claymore'></div>
			<div className='rpgui-icon stone-saber'></div>
		</div>
	);
};

export default Icons;
