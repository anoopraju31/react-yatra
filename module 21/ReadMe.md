# Module 21 - React HOC (Higher Order Component) Pattern

### Higher Order Component (HOC)
In React, a Higher Order Component (HOC) is a function that takes a component and returns a new component with enhanced functionality. HOCs are a way to reuse component logic, share code between components, and abstract away common patterns. They are a form of component composition in React.

### Example
``` jsx
import React from 'react';

// Higher Order Component as a function
const withEnhancements = (WrappedComponent) => {
  // Return a new functional component
  return function EnhancedComponent(props) {
    // Add some additional logic or state here

    // Render the wrapped component with additional props or modifications
    return <WrappedComponent {...props} />;
  };
};

// Your functional component
const MyComponent = (props) => {
  // Your component logic here
  return <div>{props.message}</div>;
};

// Enhance your component using the Higher Order Component
const EnhancedMyComponent = withEnhancements(MyComponent);

// Render the enhanced component
const App = () => {
  return <EnhancedMyComponent message="Hello, HOC!" />;
};

export default App;
```
In this example, withEnhancements is a function that takes a functional component (WrappedComponent) and returns a new functional component (EnhancedComponent). The enhanced component is then used in the App component. 