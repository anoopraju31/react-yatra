# Module 10

### Topics to be cover:
- **All about useLayoutEffect**

### useLayoutEffect hook
The useLayoutEffect hook in React is similar to the useEffect hook, but it fires synchronously after all DOM mutations. This can be useful in situations where you need to read layout from the DOM and then immediately make changes or take actions based on that layout. It's often used for operations that are required before the browser repaints.

``` jsx
    import React, { useLayoutEffect, useState } from 'react';

    function ExampleComponent() {
        const [width, setWidth] = useState(0);

        useLayoutEffect(() => {
            // This code will run synchronously after all DOM mutations.
            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            // Attach the event listener
            window.addEventListener('resize', handleResize);

            // Initial setup
            handleResize();

            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []); // Empty dependency array means this effect will run once, similar to componentDidMount

        return (
            <div>
                <p>Window Width: {width}</p>
            </div>
        );
    }

    export default ExampleComponent;
```

### useLayoutEffect vs useEffect
|                 useEffect                 |              useLayoutEffect              |
|-------------------------------------------|-------------------------------------------|
| useEffect is asynchronous and runs after the render is committed to the screen. It doesn't block the browser rendering.| useLayoutEffect runs synchronously after all DOM mutations. It blocks painting, so it's crucial to perform lightweight and fast operations inside it. |
| useEffect schedules the effect to run after the browser has painted, allowing the UI to be responsive. | Use useLayoutEffect when you need to read layout from the DOM and make changes immediately before the next repaint. |
| Use useEffect for data fetching, subscriptions, manually changing the DOM, etc. | useLayoutEffect has the same API as useEffect, but with different timing. |

### When to use useLayoutEffect
- **Measure DOM Elements**: When you need to measure the size or position of a DOM element after it's been rendered.
- **Immediate State Changes**: When you need to update state immediately based on layout calculations before the next paint.
- **Critical Layout Operations**: In situations where the layout needs to be precise and any delay might cause visual glitches.

### Example
``` jsx
    import React, { useLayoutEffect, useRef } from 'react';

    function ExampleComponent() {
        const elementRef = useRef();

        useLayoutEffect(() => {
            // This code will run synchronously after all DOM mutations.
            const element = elementRef.current;

            // Measure the height of the element
            const height = element.clientHeight;
            
            // Perform some layout-based calculations or updates

        }, []); // Empty dependency array means this effect will run once, similar to componentDidMount

        return (
            <div ref={elementRef}>
            {/* Your component content */}
            </div>
        );
    }
```
In this example, **useLayoutEffect** is used to measure the height of a DOM element (**elementRef.current**) immediately after it's rendered.

### Caveats and Best practices
- **Performance Impact**: Be cautious about performance, as useLayoutEffect can potentially block the rendering. Use it Wisely and consider if useEffect might be a better fit for the use case.
- **Dependency Array**: Just like with useEffect, be mindful of the dependency array. Ensure that include all dependencies that are used inside the effect to avoid stale closures.
- **Fallback to useEffect**: If the side effect doesn't need to be synchronous and is not dependent on layout changes, consider using useEffect instead for better performance.
