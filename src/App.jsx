import './App.css';
import Game from './Game';
import { TooltipProvider } from './contexts/TooltipContext';
import './index.css';

function App() {
	return (
		<TooltipProvider>
			<Game />
		</TooltipProvider>
	);
}

export default App;
