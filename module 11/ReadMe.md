# Module 11

### Topics to be covered
- **All about useRef Hook** 
- **forwardRef API**

### useRef
In React, the **useRef** hook is a function that allows you to create a mutable object called a ref object. This object has a **current** property that can be used to hold a reference to a DOM element or a mutable value. The primary use case for **useRef** is to persist values across renders without causing the component to re-render.

Here are some common use cases and features of the useRef hook:
1. **Accessing and interacting with DOM elements**:
    ``` jsx
        import { useRef, useEffect } from 'react';

        function MyComponent() {
            const myInputRef = useRef(null);

            useEffect(() => {
                // Focus on the input element when the component mounts
                myInputRef.current.focus();
            }, []);

            return <input ref={myInputRef} />;
        }
    ```
    In this example, myInputRef is a ref object that holds a reference to the input element. The useEffect hook ensures that the focus is set on the input element when the component mounts.
2. **Persisting values across renders**:
    ``` jsx
        import { useRef, useEffect } from 'react';

        function MyComponent({ data }) {
            const prevDataRef = useRef();

            useEffect(() => {
                // Compare current data with previous data
                if (prevDataRef.current !== data) {
                // Perform some action based on the data change
                console.log('Data has changed!');
                }

                // Update the ref to store the current data for the next render
                prevDataRef.current = data;
            }, [data]);

            // Rest of the component...
        }
    ```
    Here, count is a ref object used to persist a value (0) across renders without triggering a re-render. It allows you to keep values between renders without causing the component to update.
3. **Storing previous state or props**:
    ``` jsx
        import { useRef, useEffect } from 'react';

        function MyComponent({ data }) {
            const prevDataRef = useRef();

            useEffect(() => {
            // Compare current data with previous data
            if (prevDataRef.current !== data) {
                // Perform some action based on the data change
                console.log('Data has changed!');
            }

            // Update the ref to store the current data for the next render
            prevDataRef.current = data;
            }, [data]);

            // Rest of the component...
        }
    ```
    Here, prevDataRef is a ref object used to store the previous value of the data prop, allowing you to compare changes in subsequent renders.

### forwardRef
The forwardRef function in React is used to forward a ref from a child component to a DOM element or another React component in the parent component. This is particularly useful when you're working with higher-order components or when you want to expose a child's ref to the parent component.

Here's how forwardRef works:
1. **Creating a Forwarded Ref**:
    ``` jsx
        const MyComponent = React.forwardRef((props, ref) => {
            // Component logic here
            return <div ref={ref}>Component content</div>;
        });
    ```
    The forwardRef function takes a render function as an argument. The render function receives props and ref as parameters. You use the ref parameter to forward the ref to the desired DOM element or React component.
2. **Using the Forwarded Ref**:
    In the parent component, you can use the ref attribute to create a ref and pass it down to the forwardRef component. This allows the parent to directly access the child component's ref.
    ``` jsx 
        const parentComponent = () => {
        const childRef = React.createRef();
            return <MyComponent ref={childRef} />;
        };
    ```
3. **Accessing the Forwarded Ref**:
    The ref passed to the forwardRef component can then be accessed just like any other ref. For example, you can use it to focus on a DOM element:
    ``` jsx
        const parentComponent = () => {
            const childRef = React.createRef();

            useEffect(() => {
                if (childRef.current) {
                childRef.current.focus();
                }
            }, []);

            return <MyComponent ref={childRef} />;
        };
    ```
4. **Common Use Cases**:
    - **Wrapping Third-Party Components**: If you create a wrapper around a third-party component and want to expose the ref of the wrapped component to the parent.
    - **Forwarding Refs in HOCs (Higher-Order Components)**: When you have a higher-order component and want to forward the ref from the outer component to the inner component.
    