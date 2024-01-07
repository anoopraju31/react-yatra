import React, { forwardRef } from 'react'
import withDimension from './withDimension'

const Comp2 = (props, ref) => {
	return (
		<div className='comp2' ref={ref}>
			<h2> Hey, I'm Component 2 </h2>
			<p> Width: {props.width} </p>
		</div>
	)
}

export default withDimension(forwardRef(Comp2))
