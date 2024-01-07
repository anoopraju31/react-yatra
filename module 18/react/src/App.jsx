import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	decrement,
	decrementByAmount,
	increment,
	incrementByAmount,
} from './feature/CounterSlice'

const App = () => {
	const [amount, setAmount] = useState(1)
	const counter = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	const handleAmountChange = (e) => setAmount(parseInt(e.target.value))
	const handleIncrement = () => dispatch(increment())
	const handleDecrement = () => dispatch(decrement())
	const handleIncrementByAmount = () => dispatch(incrementByAmount(amount))
	const handleDecrementByAmount = () => dispatch(decrementByAmount(amount))

	return (
		<div>
			<p> {counter} </p>
			<input type='number' value={amount} onChange={handleAmountChange} />
			<button onClick={handleIncrement}> Increment </button>
			<button onClick={handleDecrement}> Decrement </button>
			<button onClick={handleIncrementByAmount}> Increment By Amount </button>
			<button onClick={handleDecrementByAmount}> Decrement By Amount </button>
		</div>
	)
}

export default App
