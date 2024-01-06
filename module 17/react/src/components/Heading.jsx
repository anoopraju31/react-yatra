import React from 'react'
import Text from './Text.jsx'

const Heading = (props) => {
	const { headingText } = props
	return (
		<div>
			<h1> Hey there, I am heading component </h1>
			<Text text={headingText} />
		</div>
	)
}

export default Heading
