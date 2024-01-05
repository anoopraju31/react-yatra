# Module 12 - All about useCallback

### useCallback hook
The useCallback hook in react is used to cache a function definition between re-renders. It prevents function from recreating on every render unless their dependencies change. It's especially helpful when dealing with child components that rely on function props, as it can prevent unnecessary re-renders.

### Syntax:
```jsx
    const memoizedCallback = useCallback(
        () => {
            // Function logic
        },
        [dependencies]
    );
```

### Parameters:
- **Function**: The function that you want to memoize.
- **Dependencies**: An array of dependencies. The function will only be re-created if any of these dependencies change.

### Example
```jsx
    import React, { useState, useCallback } from 'react';

    const MyComponent = () => {
        const [count, setCount] = useState(0);

        // Without useCallback
        const handleClickWithoutCallback = () => {
            console.log("Button clicked!");
        };

        // With useCallback
        const handleClickWithCallback = useCallback(() => {
            console.log("Button clicked!", count);
        }, [count]);

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                
                {/* Without useCallback */}
                <button onClick={handleClickWithoutCallback}>Click me without useCallback</button>
                
                {/* With useCallback */}
                <button onClick={handleClickWithCallback}>Click me with useCallback</button>
            </div>
        );
    };
```
In the example above:
- The **handleClickWithoutCallback** function is recreated on every render, even though it doesn't depend on any state or prop. This could lead to unnecessary re-renders of child components that receive this function as a prop.

On the other hand, the **handleClickWithCallback** function is wrapped with useCallback and depends on the count state. This means it will only be recreated if the **count** state changes, preventing unnecessary re-renders when it's passed as a prop to child components.

### When to use useCallback hook?
- Use **useCallback** when we have a function that relies on external variables (like state or props), and we want to avoid recreating it on every render.
- Use **useCallback** when we want to optimize performance by preventing unnecessary re-renders of child components that depend on the memoized function.

### Caveats
- It's important to use useCallback wisely, as excessive use can lead to unnecessary complexity.
- Only use useCallback when it's actually needed for performance optimization.