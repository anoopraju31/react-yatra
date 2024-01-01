import React from 'react'
import ReactDOM from 'react-dom'

const API_DATA = 'Hello World, Happy New Year'
const isMorning = new Date().getHours() < 12

const div = (
	<div>
		<p className='text'> {API_DATA} </p>
		{isMorning && <p> Good Morning! </p>}
	</div>
)

const Greetings = function () {
	return div
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Greetings())
