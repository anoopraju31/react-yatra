const child = React.createElement(
	'p',
	{},
	'Hello from Anoop, I am inside react now.',
)
const child1 = React.createElement('p', {}, 'This a child.')
const child2 = React.createElement('p', {}, 'This is another child.')
const div = React.createElement('div', { className: 'text' }, [
	child,
	child1,
	child2,
])

console.log(div)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)
