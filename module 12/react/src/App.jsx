import React, { useState } from 'react'
import SecondParent from './components/SecondParent.jsx'

const App = () => {
	const [count, setCount] = useState(0)
	const myFunction = () => {
		//
	}

	return (
		<div
			style={{
				background: '#0f3',
				padding: '20px',
			}}>
			<h1> The outermost Parent </h1>
			<p>{count}</p>
			<button onClick={() => setCount((prev) => prev + 1)}> Increment </button>
			<SecondParent />
		</div>
	)
}

export default App
