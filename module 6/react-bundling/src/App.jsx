import React from 'react'
import Button from './components/Button.jsx'

const App = () => {
	const handleClick = () => alert('Clicked Me!')

	return (
		<div>
			<Button handleClick={handleClick}> Click Me </Button>
		</div>
	)
}

export default App
