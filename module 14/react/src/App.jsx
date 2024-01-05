import React, { useState } from 'react'
import PrintTable from './components/PrintTable.jsx'

const App = () => {
	const [counter1, setCounter1] = useState(0)
	const [counter2, setCounter2] = useState(0)

	const incrementCounter1 = () => {
		setCounter1((prev) => prev + 1)
	}

	const incrementCounter2 = () => {
		setCounter2((prev) => prev + 1)
	}

	return (
		<div
			style={{
				background: '#0f3',
				padding: '20px',
			}}>
			<p>
				{' '}
				Counter: {counter1}{' '}
				<button onClick={incrementCounter1}> Increment Counter 1 </button>
			</p>
			<p>
				{' '}
				Counter: {counter2}{' '}
				<button onClick={incrementCounter2}> Increment Counter 2 </button>
			</p>
			<PrintTable num={counter1} />
		</div>
	)
}

export default App
