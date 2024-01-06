import React, { useMemo } from 'react'

const generateTable = (num) => {
	let startTime = performance.now()

	while (performance.now() - startTime < 800) {
		// Do nothing for 800 ms to emulate extremely slow code
	}

	const arr = []
	for (let i = 1; i <= 10; i++) {
		arr.push(<div>{num * i}</div>)
	}

	return arr
}

const PrintTable = (props) => {
	const { num } = props
	const table = useMemo(() => generateTable(num), [num])
	return <div>{table}</div>
}

export default PrintTable
