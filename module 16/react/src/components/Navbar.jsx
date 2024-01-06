import React, { useContext } from 'react'
import Button from './Button.jsx'
import ThemeContext from './context.js'

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<div>
			<span> Home </span> <span> About Us </span> <span> Contact </span>{' '}
			<Button handleClick={toggleTheme}> Toggle Theme - {theme} </Button>
		</div>
	)
}

export default Navbar
