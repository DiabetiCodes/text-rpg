import './App.css';
import Button from './components/Buttons/Button.jsx';
import Checkbox from './components/Buttons/Checkbox.jsx';
import RadioBtn from './components/Buttons/RadioBtn.jsx';
import Dropdown from './components/Dropdown.jsx';
import Frames from './components/Frames.jsx';
import Icons from './components/Icons.jsx';
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
					<Icons type='excalibur' />

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
