# Module 5

### Topic to cover:
- **Intro to props and children** 
- **What are import, and export terminologies**

### export
- there are two types of export. namely:
    - Default export
    - Named export
- Exmaple of default export:
    ``` js
        const App = () => {
            return <div>App</div>
        }

        export default App
    ```
    - In a JavaScript. only a single export default is allowed.
- Example for named export:
    ``` jsx
        export const App = () => {
            return <div>App</div>
        }
    ```
    - In a JavaScript. we can have multiple named export is allowed.

### import
- Similarly imports is of two types.
- **Default Inport**
    ``` js
        import App from './App'
    ```
    - Default import is used when importing the default export from the module, which can be a function, class, or any other value.
- **Named Import**
    ``` js
        import {App} from './App'
    ```
    - Named import is used when we want to import a specific variables, functions or classes from the module by their exact names.  

### Props in react
- In React, "props" is a shorthand for "properties" and refers to the inputs that a React component receives.
- Props are used to pass data from a parent component to a child component. 
- They allows us to customize or configure a component when we use it in another part of your application.
- **Passing Props**
    - When we use a component in JSX, we can pass data to it by adding attributes with values.

    ``` jsx 
        // ParentComponent.jsx
        import React from 'react';
        import ChildComponent from './ChildComponent';

        function ParentComponent() {
            return <ChildComponent name="John" age={25} />;
        }
    ```

- **Receiving Props**
    - In the child component, you can access the passed data through the **props** object.

    ``` jsx
        // ChildComponent.jsx
        import React from 'react';

        function ChildComponent(props) {
            return (
                <div>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                </div>
            );
        }

        export default ChildComponent;
    ```
- **Default Props**
    - We can also specify default values for props in case they are not provided.
    ``` jsx
        // ChildComponent.jsx
        import React from 'react';

        function ChildComponent(props) {
            return (
                <div>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                </div>
            );
        }

        // Set default values
        ChildComponent.defaultProps = {
            name: 'Guest',
            age: 18
        };

        export default ChildComponent;
    ```
- **Destructuring Props**
    - Instead of accessing props directly from the props object, we can destructure them within the function parameters.
    ``` jsx
        // ChildComponent.jsx
        import React from 'react';

        function ChildComponent({ name, age }) {
            return (
                <div>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                </div>
            );
        }

        export default ChildComponent;
    ```


### children
- In React, "children" refers to the components, elements, or content that are nested within the opening and closing tags of a parent component.

    ``` jsx
        const ParentComponent = ({ children }) => {
            return (
                <div>
                    <h2>Parent Component</h2>
                    {children}
                </div>
            );
        };

        const App = () => {
            return (
                <ParentComponent>
                    <p>This is a child component.</p>
                    <p>Another child component.</p>
                </ParentComponent>
            );
        };
    ```