# Module 17 - Introduction to createPortal in react-dom

### createPortal
In React, a portal is a way to render components outside of their parent component's DOM hierarchy. This can be useful in situations where we want to render a component at a different place in the DOM, such as models, tooltips, or dropdown menus.

### Example
``` jsx
// Import necessary modules
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Create a functional component for the portal content
const PortalContent = ({ onClose }) => {
  return (
    <div className="portal-content">
      <p>This is a portal!</p>
      <button onClick={onClose}>Close Portal</button>
    </div>
  );
};

// Create the main component that will use the portal
const App = () => {
  const [portalVisible, setPortalVisible] = useState(false);

  // Function to toggle the portal visibility
  const togglePortal = () => {
    setPortalVisible(!portalVisible);
  };

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={togglePortal}>Toggle Portal</button>

      {portalVisible && (
        // Use ReactDOM.createPortal to render the portal content outside the main component hierarchy
        ReactDOM.createPortal(
          <PortalContent onClose={togglePortal} />,
          document.body
        )
      )}
    </div>
  );
};

// Render the main component to the root element in the HTML
ReactDOM.render(<App />, document.getElementById('root'));
```