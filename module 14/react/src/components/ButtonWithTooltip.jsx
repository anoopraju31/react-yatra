import React, { useState, useRef } from 'react'

import Tooltip from './Tooltip.jsx'
const ButtonWithTooltip = (props) => {
	const { tooltipContent, children } = props
	const [targetPositions, setPositions] = useState(null)
	const buttonRef = useRef(null)
	const handleMouseEnter = () => {
		const rect = buttonRef.current.getBoundingClientRect()
		setPositions({
			left: rect.left,
			top: rect.top,
			right: rect.right,
			bottom: rect.bottom,
		})
	}
	return (
		<>
			<button
				ref={buttonRef}
				onPointerEnter={handleMouseEnter}
				onPointerLeave={() => {
					setPositions(null)
				}}>
				{children}
			</button>
			{targetPositions && (
				<Tooltip targetPositions={targetPositions}>{tooltipContent}</Tooltip>
			)}
		</>
	)
}

export default ButtonWithTooltip
