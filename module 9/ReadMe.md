# Module 9

### Topics to cover
- **Exploring UseEffect hook**

### useEffect hook
In React, the useEffect hook is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, manual DOM manipulations, and other operations that might occur after the component has been rendered.

Here's a basic explanation of the useEffect hook:
``` jsx
    import { useEffect } from 'react';

    function MyComponent() {
        useEffect(() => {
            // Side effect code goes here
            console.log('Component has mounted');

            // Clean-up code (optional)
            return () => {
            console.log('Component will unmount');
            // Perform clean-up operations here, like unsubscribing from subscriptions
            };
        }, []); // Empty dependency array means the effect will only run once on mount

        // Render component content
        return (
            <div>
            {/* Component content goes here */}
            </div>
        );
    }
```

The useEffect hook takes two arguments: a function containing the code for the side effect and an optional dependency array.
- The function passed to useEffect will run after every render. It might perform asynchronous operations, subscribe to data sources, or manipulate the DOM.
- The dependency array is an optional second argument. It specifies the values from the component's scope that the effect depends on. If the values in the dependency array change between renders, the effect will re-run. If the dependency array is empty, the effect only runs once after the initial render.

The return function inside the useEffect can be used for cleanup. It runs before the component unmounts or before a new effect is executed (if the dependencies change). This is helpful for cleaning up resources like event listeners or subscriptions to avoid memory leaks.

Here's an example with a dependency array:
``` jsx
    import { useState, useEffect } from 'react';

    function DataFetchingComponent({ userId }) {
        const [userData, setUserData] = useState(null);

        useEffect(() => {
            // Fetch user data when the component mounts or when userId changes
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://api.example.com/user/${userId}`);
                    const data = await response.json();

                    setUserData(data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

            fetchData();

            // Cleanup function
            return () => {
            // Any cleanup logic can go here
            };
        }, [userId]); // Dependency array with userId

        if (!userData) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <p>User Name: {userData.name}</p>
                {/* Display other user data */}
            </div>
        );
    }
```

In this example, the effect depends on the userId prop. If userId changes, the effect will re-run and fetch the new user data. The cleanup function is provided to handle any necessary clean-up when the component unmounts or when userId changes.

### When to use *useEffect*
1. **Fetching Data**:
    ``` jsx
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://api.example.com/data');
                    const data = await response.json();
                    setData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, []); // Empty dependency array means it runs once on mount
    ```
2. **Subscriptions**:
    ``` jsx
        useEffect(() => {
            const subscription = subscribeToData((data) => {
                setData(data);
            });

            return () => {
                // Cleanup subscription when component unmounts or when dependencies change
                subscription.unsubscribe();
            };
        }, [dependencies]);
    ```
3. **Manual DOM Manipulation**:
    ``` jsx
        useEffect(() => {
            document.title = `New Page Title`;

            return () => {
                // Revert changes on component unmount
                document.title = `Original Page Title`;
            };
        }, []); // Empty dependency array means it runs once on mount
    ```

### Tips & Best Practices
1. **Depend on State and Props**:
    - Always include any values from the component scope that your effect depends on in the dependency array. This helps prevent bugs caused by stale closures.
        ``` jsx
            useEffect(() => {
            // Side effect depending on someState and someProp
            }, [someState, someProp]);
        ```
2. **Cleanup Logic**:
    - Use the cleanup function to unsubscribe from subscriptions, clear up timers, or perform any necessary cleanup. This helps avoid memory leaks.
        ``` jsx
            useEffect(() => {
                const subscription = subscribeToData((data) => {
                    setData(data);
                });

                return () => {
                    // Cleanup subscription when component unmounts or when dependencies change
                    subscription.unsubscribe();
                };
            }, [dependencies]);
        ```
3. **Async Code**:
    - If we have asynchronous code inside the useEffect, we can use an async function. However, we cannot make the useEffect callback itself async. Instead, define an async function inside and call it immediately.
        ``` jsx
            useEffect(() => {
                const fetchData = async () => {
                // Async code here
                };

                fetchData();
            }, [dependencies]);
        ```
4. **Multiple useEffect Blocks**:
    - Split unrelated logic into separate useEffect blocks. This can improve code readability and organization.
        ``` jsx
            useEffect(() => {
            // Effect for one concern
            }, [dependencies1]);

            useEffect(() => {
            // Effect for another concern
            }, [dependencies2]);
        ```
5. **Conditional Effects**:
    - We can conditionally execute an effect based on a condition.
        ``` jsx
            useEffect(() => {
                if (someCondition) {
                    // Effect code here
                }
            }, [someCondition]);
        ```