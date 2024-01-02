import React, { useState } from 'react'
import Button from './components/Button.jsx'

const App = () => {
	const [message, setMessage] = useState('Hello User, Good Morning!')
	const changeMessage = () => {
		console.log('Clicked')
		setMessage('Hello User, Good Afternoon')
	}

	return (
		<div>
			<p>{message}</p>
			<Button handleClick={changeMessage}> Click Me </Button>
		</div>
	)
}

export default App
