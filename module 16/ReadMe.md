# Module 16 - React createContext API and useContext hook

### Props 
- In React **props** are a way to pass data from a parent component to a child component. Props allow us to create dynamic and reusable components by passing different data to them.
- **Props** is short for **Properties**

### Props Drilling
- **Props Drilling** is a term used in React to describe the process of passing props through multiple layers of nested components. 
- It occurs when a parent component passes props to a child component, which in turn passes those props down to its own child component.
![Props Drilling](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.dark.png&w=640&q=75)


### Context in React
- Context in React is a mechanism that enables the sharing of values, such as state or configuration settings, across components in a React Application.
- In simple terms, Context lets a parent component provide data to the entire tree below it

### React Context API
1. **Create a Context**:
- Use the **createContext** function to create a context. This function returns two components: **Provider** and **Consumer** (or we can use the **useContext** hook to consume the context).
``` jsx
    import React, { createContext } from 'react'

    const MyContext = createContext()
```
2. **Provide the Context Value**:
- Wrap the part of the component tree that needs access to the context with the **Provider** component.
- Pass the data that needed to be shared through the **value** props.
``` jsx
    const MyComponent = () => {
        return (
            <MyContext.Provider value={{/* pass date here */}}>
            {/* The components that needs to access the context */}
            </MyComponent.Provider>
        )
    }
``` 
3. **Consume the Context**:
- Use the **Consumer** component or the **useContext** hook to consume the context within components.
- Using **Consumer** component:
    ``` jsx
        <MyContext.Consumer>
            {
                value => (
                    // Render something based on the context value
                )
            }
        </MyContext.Consumer>
    ```
- Using **useContext** hook:
    ``` jsx
        import React, { useContext } from 'react'

        const MyComponent = () => {
            const contextValue = useContext(MyContext)

            
            // Render something based on the context value
        }
    ```
### Example
Let's create a simple example with a context that manages a theme:
``` jsx
    import React, { createContext, useState, useContext } from 'react';

    // Step 1: Create a Context
    const ThemeContext = createContext();

    // Step 2: Create a Provider
    const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState('light');

        const toggleTheme = () => {
            setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        };

        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
            </ThemeContext.Provider>
        );
    };

    // Step 3: Consume the Context using useContext hook
    const ThemedComponent = () => {
        const { theme, toggleTheme } = useContext(ThemeContext);

        return (
            <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
                <p>Current Theme: {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        );
    };

    // Step 4: Wrap your components with the Provider
    const App = () => {
        return (
            <ThemeProvider>
            <ThemedComponent />
            </ThemeProvider>
        );
    };

    export default App;
```
In this example, the **ThemeProvider** is the provider component, and **ThemedComponent** is a consumer that uses the **useContext** hook to access the theme and the toggleTheme function.

### Important Points
- Context is best suited for values that are truly global, like themes, user authentication, etc.
- Be mindful of unnecessary rerenders; consider using memoization techniques if performance is a concern.
- Context is not a replacement for props. Use it for truly global state and pass props for more specific data.
- We can have multiple contexts in our application.