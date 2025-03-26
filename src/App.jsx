import './App.css';
import Button from './components/Buttons/Button.jsx';
import Checkbox from './components/Buttons/Checkbox.jsx';
import RadioBtn from './components/Buttons/RadioBtn.jsx';
import Equipment from './components/CharacterMenu/Equipment.jsx';
import Inventory from './components/CharacterMenu/Inventory.jsx';
import Dropdown from './components/Dropdown.jsx';
import Frames from './components/Frames.jsx';
import Icon from './components/Icon.jsx';
import Inputs from './components/Input.jsx';
import List from './components/List.jsx';
import Narration from './components/Narration.jsx';
import ProgressBars from './components/ProgressBar.jsx';
import Slider from './components/Slider.jsx';
import './index.css';

function App() {
  return (
		<div className='rpgui-content'>
			{/* <Button text='Button' variant='golden' /> */}
			{/* <Checkbox label='Checkbox' /> */}
			{/* <Dropdown
				label='Select class'
				options={[
					'Archer',
					'Assassin',
					'Elementalist',
					'Fighter',
					'Knight',
					'Lancer',
					'Mage',
					'Thief',
					'Warrior',
				]}
			/> */}
			<Equipment
				armorSlot='brigadier-cuirass'
				helmetSlot='archers-hat'
				ringSlot1='jet-ring'
				ringSlot2='hp-ring'
				ringSlot3='mahogany-ring'
				shieldSlot='archers-bracers'
				shoesSlot='archers-boots'
				weaponSlot='cloud-breaker'
			/>
			{/* <Icon /> */}
			<Inventory
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

			{/* <Frames color='grey' /> */}
			{/* <Inputs /> */}
			{/* <List /> */}
			{/* <Narration /> */}
			{/* <ProgressBars label='Health' id='hp' value='0.6' color='blue' /> */}
			{/* <RadioBtn
				label='Select Gender'
				values={['Male', 'Female', 'Animal']}
			/> */}
			{/* <Slider label='Slider' min='0' max='100' value='0.6' variant='' /> */}
		</div>
	);
}

export default App;
