import React, { useState, lazy, Suspense } from 'react'
// import Text from './components/Text.jsx'

const Text = lazy(() => delayForDemo(import('./components/Text.jsx')))

const App = () => {
	const [showText, setShowText] = useState(false)

	return (
		<div>
			<button onClick={() => setShowText((prev) => !prev)}>
				{' '}
				Toggle Text{' '}
			</button>
			{showText && (
				<Suspense fallback={<p>loading...</p>}>
					<Text text='Hello, How are you?' />
				</Suspense>
			)}
		</div>
	)
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000)
	}).then(() => promise)
}

export default App
