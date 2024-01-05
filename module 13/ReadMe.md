# Module 13 - All about useMemo Hook

### useMemo hook
useMemo hook in React helps in optimizing the performance of the React app by memoizing the result of a function of a component. Memoization is a technique that involves caching the result of a function based on its arguments, so that if the function is called with the same arguments again, the cached result is returned instead of recomputing the result. This can be particularly useful when dealing with expensive calculations or when working with components that re-render frequently.

### Syntax
```jsx
    const memoizedValue = useMemo(() => computeExpensiveValue(a,b), [a,b])
```

- The first argument to **useMemo** is a function that computes the value we want to memoize.
- The second argument is an array of dependenices. The memoized value will only be recomputed if any of these dependencies change.

### Example
```jsx
    import React, { useState, useMemo } from 'react';

    const ExpensiveComponent = ({ a, b }) => {
        const expensiveValue = useMemo(() => {
            console.log('Computing expensiveValue...');
            return a * b;
        }, [a, b]);

        return (
            <div>
                <p>Expensive Value: {expensiveValue}</p>
            </div>
        );
    };

    const App = () => {
        const [valueA, setValueA] = useState(2);
        const [valueB, setValueB] = useState(3);

        return (
            <div>
                <ExpensiveComponent a={valueA} b={valueB} />
                <button onClick={() => setValueA(valueA + 1)}>Increment A</button>
                <button onClick={() => setValueB(valueB + 1)}>Increment B</button>
            </div>
        );
    };
```
In this example, the **ExpensiveComponent** calculates the product of **a** and **b**. Without **useMemo**, this computation would occur on every render. However, by wrapping the computation in **useMemo** with **[a, b]** as dependencies, the expensive calculation only happens when **a** or **b** change.

### When to use useMemo
- **Computations with High Cost**: Use useMemo when we have a computation that is relatively expensive in terms of time or resources.
- **Preventing Unnecessary Renders**: Use useMemo to prevent unnecessary re-renders of components when the computed value has not changed.


### When not to use useMemo
- **Premature Optimization**: Avoid using **useMemo** for every value in the component. Only use it when there is a noticeable performance improvement or when a computation is genuinely expensive.
- **Simple Values**: For simple and quick computations, the overhead of using **useMemo** may outWiegh the benefits. 