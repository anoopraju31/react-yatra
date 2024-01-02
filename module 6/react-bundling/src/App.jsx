import React from 'react'
import Text from './components/Text.jsx'

const App = () => {
	const data = [
		{
			id: 'a',
			text: 'text - 1',
		},
		{
			id: 'b',
			text: 'text - 2',
		},
		{
			id: 'c',
			text: 'text - 3',
		},
		{
			id: 'd',
			text: 'text - 4',
		},
		{
			id: 'e',
			text: 'text - 5',
		},
		{
			id: 'f',
			text: 'text - 6',
		},
		{
			id: 'g',
			text: 'text - 7',
		},
	]

	return (
		<div>
			{data.map(({ id, text }) => (
				<Text key={id} text={text} />
			))}
		</div>
	)
}

export default App
