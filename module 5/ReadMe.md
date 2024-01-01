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