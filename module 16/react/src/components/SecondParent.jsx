import React, { useCallback } from 'react'
import ThirdParent from './ThirdParent.jsx'

const SecondParent = () => {
	const handlechange = useCallback(() => {
		console.log('Hey Het haha!')
	}, [])

	return (
		<div style={{ background: '#edf', padding: '30px' }}>
			<h2 style={{ textAlign: 'center' }}> I'm second parent </h2>
			<ThirdParent handleChange={handlechange} />
		</div>
	)
}

export default SecondParent
