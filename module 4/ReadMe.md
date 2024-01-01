# Module 4 

### Topics
1. **Introduction to JSX**
2. **Element vs Component**
3. **Conditional rendering**

### Introduction to JSX
- JSX stands for JavaScript XML.
- JSX look alike HTML but the key difference is in writing HTML attributes in JSX. In JSX, HTML attributes are written in camel casing.
- Under the hood JSX is converted into React Element.
- JSX is a Syntactic sugar, meaning it was introduction for a better developer experience.
- JSX provides a structured way to create React Elements make it easy to keep track of elements.

#### Rendering values dynamically in JSX.

``` jsx
        const API_DATA = 'Hello World, Happy New Year'
		const paragraph = <p className='text'> {API_DATA} </p>
```

#### Conditional Rendering in JSX

``` jsx
    const isMorning = new Date().getHours() < 12
    const greeting = (
        <div>
            {isMorning && <p> Good Morning! </p>}
        </div>
    )
```

### Components
- Components are independent and reusable bits of code. 
- A functional Component in React is a function that returns a React Element. In short a function that returns some JSX.

``` jsx
    const Greeting = fucntion() {
        return (
            <div>
                <p> Good Morning! </p>
            </div>
        )
    }
```

### Element vs Component
- In React, an element is the smallest building block while the component is a reusable piece of the code.
- The element contains the information to be rendered on the UI and the Components are composed of the elements.

### React Fragments
- React Fragments provide a way to group multiple elements without adding extra nodes to the DOM.
- Fragments are especially useful when you need to return multiple elements from a component, but you don't want to wrap them in a parent div or another container element.
- A components must returns a single JSX, a component is not allowed to have siblings elemens.

``` jsx
    const MyComponent = () => {
        return (
            <>
                <h1>Hello</h1>
                <p>React Fragments</p>
            </>
        );
    };
```

- In this example, the **empty angle brackets (<> and </>)** are shorthand syntax for declaring a React Fragment. You can also use the **<React.Fragment>** syntax:

``` jsx
    const MyComponent = () => {
        return (
            <React.Fragment>
                <h1>Hello</h1>
                <p>React Fragments</p>
            </React.Fragment>
        );
    };
```
