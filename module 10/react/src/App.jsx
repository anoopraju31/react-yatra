import React, { useEffect, useState } from 'react'
import Button from './components/Button.jsx'

const App = () => {
	const [data, setData] = useState(0)

	useEffect(() => {
		console.log('I am run everytime there is a re-render')
	})

	useEffect(() => {
		console.log('I am updating')
	}, [])

	useEffect(() => {
		console.log('I will run everytime data gets updated.')
	}, [data])

	const handleClick = () => {
		setData((prev) => prev + 1)
	}

	return (
		<div>
			<p>{data}</p>
			<Button handleClick={handleClick}> Update </Button>
		</div>
	)
}

export default App
