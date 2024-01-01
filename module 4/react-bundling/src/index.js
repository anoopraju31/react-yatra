import React from 'react'
import ReactDOM from 'react-dom'

const API_DATA = 'Hello World, Happy New Year'

const div = (
	<div>
		<p className='text'> {API_DATA} </p>
	</div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)
