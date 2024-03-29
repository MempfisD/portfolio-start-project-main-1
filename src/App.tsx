import './App.css'
import { Footer } from './lauoyt/footer/Footer'
import { Header } from './lauoyt/header/Header'
import { About } from './lauoyt/sections/about/About'
import { Contacts } from './lauoyt/sections/contacts/Contacts'
import { Main } from './lauoyt/sections/main/Main'
import { Skills } from './lauoyt/sections/skills/Skills'
import { Works } from './lauoyt/sections/works/Works'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<About />
			<Skills />
			<Works />
			<Contacts />
			<Footer />
		</div>
	)
}

export default App
