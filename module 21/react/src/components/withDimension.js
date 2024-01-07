import React, { useEffect, useRef, useState } from 'react'

const withDimension = (Element) => {
	const WithDimension = (props) => {
		const [width, setWidth] = useState(0)
		const [height, setHeight] = useState(0)
		const elementRef = useRef(null)

		useEffect(() => {
			if (!elementRef.current) return

			setWidth(elementRef.current.offsetWidth)
			setHeight(elementRef.current.offsetHeight)
		}, [elementRef])

		return <Element ref={elementRef} width={width} height={height} {...props} />
	}

	return WithDimension
}

export default withDimension
