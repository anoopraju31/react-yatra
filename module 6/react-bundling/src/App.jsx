import React, { useState } from 'react'
import Text from './components/Text.jsx'
import Button from './components/Button.jsx'

const App = () => {
	const [data, setData] = useState([
		{
			id: 'ce990aa8-59b1-4494-87ba-d914205178e9',
			text: 'text - 0',
		},
		{
			id: '27f93f39-a52c-415c-bb1c-0e21e915385b',
			text: 'text - 1',
		},
		{
			id: '176882b6-9ee0-41fc-9eb3-9daaaa220e0e',
			text: 'text - 2',
		},
		{
			id: 'fb7f3bfa-de5d-4110-8fb9-2938229a55fd',
			text: 'text - 3',
		},
		{
			id: 'dae4d3b1-12e2-4425-930a-40c6aa6989c6',
			text: 'text - 4',
		},
		{
			id: '808b3177-4e18-4618-8948-189c199267ed',
			text: 'text - 5',
		},
		{
			id: '80d4ecb6-1f28-46cd-9c1b-a8a8bfe7f869',
			text: 'text - 6',
		},
	])

	const handleClick = () => {
		setData((prev) => [
			{
				id: `44b0b379-869e-4432-9c57-598df4c12ab5`,
				text: `text - ${prev.length}`,
			},
			...prev,
		])
	}

	return (
		<div>
			{data.map(({ id, text }) => (
				<Text key={id} text={text} />
			))}

			<Button handleClick={handleClick}> Click Me </Button>
		</div>
	)
}

export default App
