import React, { useEffect, useRef, useState } from 'react'
import Button from './components/Button.jsx'

const App = () => {
	const [timer, setTimer] = useState(0)
	const [count, setCount] = useState(0)
	const countRef = useRef(0)
	const timerRef = useRef(null)
	const headingRef = useRef(null)
	let countLocal = 0

	const handleCountRef = () => {
		countRef.current += 1
	}
	const handleCountState = () => setCount((previousCount) => previousCount + 1)
	const handleLocalCount = () => countLocal++

	useEffect(() => {
		const timerId = setInterval(() => setTimer((prev) => prev + 1), 1000)
		timerRef.current = timerId

		return () => {
			clearInterval(timerId)
		}
	}, [timerRef])

	useEffect(() => {
		console.log('ref change', timerRef)
	}, [timerRef])

	const handleClearTimer = () => {
		console.log(timerRef.current)
		clearInterval(timerRef.current)
		timerRef.current = null
		setTimer(0)
	}

	const changeHeading = () => {
		headingRef.current.innerText = 'changed Heading'
	}

	return (
		<div>
			<Button handleClick={handleClearTimer}> clear Timer </Button>
			<Button handleClick={changeHeading}> change Heading </Button>
			<Button handleClick={handleLocalCount}> Increment Local Count </Button>
			<Button handleClick={handleCountRef}> Increment Ref Count </Button>
			<Button handleClick={handleCountState}> Increment State Count </Button>

			<p> Local Count: {countLocal} </p>
			<p> ref count: {countRef.current} </p>
			<p> state count: {count} </p>
			<p> Timer: {timer}</p>
			<h1 ref={headingRef}> Heading </h1>
		</div>
	)
}

export default App
