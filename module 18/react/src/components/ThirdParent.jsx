import React, { memo, useState } from 'react'

const ThirdParent = memo((props) => {
	const { handleChange } = props
	const [counter, setCounter] = useState(0)

	let startTime = performance.now()

	while (performance.now() - startTime < 2000) {
		// Do nothing for 500ms to emulate extremely slow code
	}

	const handleClick = () => {
		setCounter((prev) => prev + 1)
		handleChange?.()
	}

	return (
		<div
			style={{
				background: '#fc3',
				padding: '20px',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<h2> I am a super slow component </h2>
			<p>{counter}</p>
			<button onClick={handleClick}> Increment Me </button>
		</div>
	)
})

export default ThirdParent
