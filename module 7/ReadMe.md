# Module 7

### Topics to cover:
- **What are hooks**
- **Understanding useState**
- **What is re-render**
- **Misuse of state variables**

### What are hooks?
- In React, hooks are special functions that enable functional components to utilize essential React features such as managing component state, handling lifecycle events, dealing with side effects, and accessing context.
- There are two types of hooks:
    - **Built-in hooks from React package**: useState, useEffect, useLayoutEffect, useMemo, useReducer, useRef
    - **Custom hooks**: We can create our own hooks for specific use cases from the built-in hooks.

### Understanding useState hook
-  In React, the **useState** hook is allows us to add state to our functional components, which were traditionally stateless.
- The **useState** hook is part of the Hook API introduced in React 16.8 to manage stateful logic in functional components.
- **Syntax**:
    ``` jsx
        const [state, setState] = useState(initialState);
    ```
- **Parameters**:
    - **initialState**: The initial state value for the state variable.
- **Return values**:
    - **state**: The current state value.
    - **setState**: A function used to update the state.
- **Example**:
    ``` jsx
        import React, { useState } from 'react';

        function Counter() {
            // Declare a state variable named "count" with an initial value of 0
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>
                        Increment
                    </button>
                </div>
            );
        }
    ```
- **How it works**:
    1. **Initialization**: The **useState** function is called with an initial state value. it returns an array with two elements:
        - The first element (**count** in the above example) is the current state value.
        - The second element (**setCount** in the above example) is a function that can be used to update the state.
    2. **Rendering**: The component renders with the initial state value.
    3. **Updating State**: When an event such as a button click, triggers a state update, you use the **setCount** function to update the state. React then re-renders the component with the new state value.
    4. **Re-rendering**: The component re-renders with the updated state, and the cycle continues.
- **Multiple state variables**:
    - We can use **useState** hook multiple times to manage multiple state variables within a single component.
    ``` jsx
        const [name, setName] = useState('John');
        const [age, setAge] = useState(25);
    ```
- **Functional Updates**:
    - **setState** also accepts a function as an argument, allowing us to update the state based on the previous state.
    ``` jsx
        setCount(prevCount => prevCount + 1)
    ```
- **Note**:
    - The arugment passed to **useState** is only used during the initial render.
    - State update are asynchronous, and React batches them for performance. Therefore, avoid relying on the current state immediately after calling the **setState**.

### What is re-render?
- In React, re-rendering refers to the process of updating the DOM to reflect changes in the component's state or props. React components are designed to automatically re-render when their state or props change.

### Misuse of state variables
In React, state variables are used to store and manage the local state of a component. Misusing state variables can lead to various issues, including unpredictable behavior, performance problems, and difficulties in maintaining and debugging code. Here are some common pitfalls and examples of misuse of state variables in React:
1. **Directly modifying state**:
    ``` jsx 
        // Incorrect
        this.state.count = this.state.count + 1;
    ```
    State should never be modified directly. Instead, use the setState method provided by React to update the state:
    ``` jsx 
        // Correct
        this.setState({ count: this.state.count + 1 });
    ```
2. **Asynchronous state updates**:
    ``` jsx 
        // Incorrect
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count); // The updated count may not be reflected here
    ```
    **setState** is asynchronous, so if you need to perform an action after the state is updated, use the callback function:
    ``` jsx 
        // Correct
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state.count);
        });
    ```
3. **Not accounting for the previous state**:
    ``` jsx 
        // Incorrect
        this.setState({ count: this.state.count + 1 });
    ```
    When updating state based on the current state, use the function form of **setState** to ensure you are working with the latest state:
    ``` jsx 
        // Correct
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    ```
4. **Unnecessary re-renders**:
    Avoid creating unnecessary objects in the render method that may cause re-renders, especially for functional components and components that don't need to re-render:
    ``` jsx 
        // Incorrect
        render() {
            const data = fetchData(); // Creates a new object on each render
            return <MyComponent data={data} />;
        }
    ```
    Instead, memoize or use hooks like useMemo to prevent unnecessary re-renders.
5. **Using state for derived data**:
    If a value can be derived from props or other state, there's no need to store it in the state. This can lead to redundant data and make the code harder to maintain.
6. **Excessive use of state**:
    Having too many state variables in a component can make the code complex and harder to manage. Consider breaking down the component into smaller, more focused components with their own state.
7. **Not lifting state up**:
    If multiple components need to share the same state, consider lifting the state up to a common ancestor rather than duplicating the state in multiple components.

    ``` jsx 
    ```
