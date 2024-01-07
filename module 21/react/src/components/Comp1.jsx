import React, { forwardRef } from 'react'
import withDimension from './withDimension'

const Comp1 = (props, ref) => {
	return (
		<div className='comp1' ref={ref}>
			<h2> Hey, I am Component 1 </h2>
			<p> Width: {props?.width} </p>
		</div>
	)
}

export default withDimension(forwardRef(Comp1))
