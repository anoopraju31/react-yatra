import React, { useState } from 'react'

const App = () => {
	const [showModel, setShowModel] = useState(false)
	return (
		<div
			style={{
				overflow: showModel ? 'hidden' : 'auto',
			}}>
			<button onClick={() => setShowModel(true)}> Open Model </button>

			{showModel && (
				<div
					style={{
						margin: 0,
						position: 'fixed',
						top: '0px',
						left: '0px',
						width: '100vw',
						height: '100vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#0f4',
					}}>
					<button onClick={() => setShowModel(false)}> Close Model </button>
				</div>
			)}
		</div>
	)
}

export default App
