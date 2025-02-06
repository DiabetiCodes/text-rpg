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
			<div className='rpgui-container rpgui-draggable framed'>
				{/* <Button text='Button' variant='golden' /> */}
				{/* <Checkbox label='Checkbox' /> */}
				{/* <Dropdown 
          label='Select class' 
          options={[
            'Archer', 'Assassin', 'Elementalist', 'Fighter', 
            'Knight', 'Lancer', 'Mage', 'Thief', 'Warrior'
          ]} 
        /> */}
				<Equipment />
				{/* <Icon type='excalibur' /> */}
				{/* <Inventory
					itemSlot1='empty-slot' itemSlot2='empty-slot' itemSlot3='empty-slot' itemSlot4='empty-slot'
					itemSlot5='empty-slot' itemSlot6="empty-slot" itemSlot7='empty-slot' itemSlot8='empty-slot'
					itemSlot9='empty-slot' itemSlot10='empty-slot' itemSlot11='empty-slot' itemSlot12='empty-slot'
				/> */}

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
		</div>
	);
}

export default App;
