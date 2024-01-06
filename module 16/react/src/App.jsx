import React, { useState } from 'react'
import Heading from './components/Heading.jsx'
import ThemeContext from './components/context.js'
import Navbar from './components/Navbar.jsx'

const App = () => {
	const [theme, setTheme] = useState('light')
	const headingText = 'rgjiogjwripgtjpro'
	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Navbar />
			<Heading headingText={headingText} />
		</ThemeContext.Provider>
	)
}

export default App
