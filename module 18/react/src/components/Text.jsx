import React, { useState } from 'react'

const Text = ({ text }) => {
	const [date, setDate] = useState(new Date())
	console.log(text)
	return (
		<p>
			{text} - {date.getTime()}
		</p>
	)
}

export default Text
