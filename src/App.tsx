import './App.css';
import { Header } from './lauoyt/header/Header';
import { Main } from './lauoyt/sections/main/Main';
import { Skills } from './lauoyt/sections/skills/Skills';

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
		</div>
	);
}

export default App;
