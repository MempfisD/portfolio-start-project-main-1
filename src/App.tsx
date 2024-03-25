import './App.css';
import { Header } from './lauoyt/header/Header';
import { Main } from './lauoyt/sections/main/Main';
import { Skills } from './lauoyt/sections/skills/Skills';
import { Works } from './lauoyt/sections/works/Works';

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
			<Works />
		</div>
	);
}

export default App;
