import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
	return (
		<div>
			<input type='text' ref={ref} />
		</div>
	)
})

export default Input
