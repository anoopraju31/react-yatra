# Module 15 - React Optimization via Lazy API and Suspense Component


### lazy API
**lazy** is a function that allows us to load a component lazliy, meaning it is loaded only when it is actually needed. This is particalarly usefull for large applications where loading all components upfront might lead to slower initial page loads.

### React Suspense
**Suspense** is a component offered by React that allows us to wrap the lazy-loaded components and specify a fallback UI to render while the actual component is being loaded. This ensures a smooth user experience by providing feedback to the user during the loading process.

### Example
``` jsx
    const MyLazyComponent = React.lazy(() => import('./MyComponent'));

    function MyComponent() {
        return (
            <div>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <MyLazyComponent />
                </React.Suspense>
            </div>
        );
    }
```