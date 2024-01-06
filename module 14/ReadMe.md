# Module 14 - Understanding Memo API

### memo() in ReactJS
**memo()** is a Higher Order Component provided by React. It is used for optimizing the performance of functional components by memoizing the result. 

### How to use memo()
```jsx
    import React, {memo} from 'react'

    const MyComponent = memo((props) => {
        // Component logic here

        return  (
            <div>
                {/* JSX content*/}
            </div>
        )
    })

    export default MyComponent
```
By Wrapping the functional component with **memo()**, React will automatically memoize the component's output based on its props. if the props don't change, the component won't re-render, which can be beneficial for performance.

### Example
```jsx
    import React, { useState } from 'react';

    const Counter = React.memo(({ count }) => {
        console.log("Rendering Counter component");
        
        return (
            <div>
                Count: {count}
            </div>
        );
    });

    const App = () => {
        const [count, setCount] = useState(0);

        return (
            <div>
                <Counter count={count} />
                <button onClick={() => setCount(count + 1)}>
                    Increment Count
                </button>
            </div>
        );
    };

    export default App;
```
In this example, the Counter component is memoized, so it won't re-render unless the count prop changes.