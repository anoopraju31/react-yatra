# Module 8

### Topic to cover:
- **What is React Fiber and Reconciliation**

### Key Terminologies
- **Reconciliation**: The algorithm React uses to diff one tree with another to ditermine which parts need to be changed.
- **Update**: A Change in the data used to render a React App. Usually the result of **setState**. Eventually results in a re-render.


### Reconciliation
In React, reconciliation refers to the process of updating the user interface (UI) to reflect changes in the underlying data. React uses a virtual DOM and a process called "reconciliation" to efficiently update only the parts of the UI that have changed, rather than re-rendering the entire DOM.

Here are some key concepts related to reconciliation in React:
1. **Virtual DOM**:
React uses a virtual DOM to represent the UI in memory. When the state of a component changes, React creates a new virtual DOM tree, which is a lightweight copy of the actual DOM. The virtual DOM is then compared with the previous virtual DOM to identify the differences.
2. **Reconciliation Algorithm**:
React uses a diffing algorithm to compare the new virtual DOM with the previous one and determine the minimal set of changes needed to update the actual DOM. This process is known as reconciliation. React aims to make these updates as efficient as possible to avoid unnecessary re-renders.
3. **Keys**:
When working with dynamic lists of elements in React, it's important to provide a unique key prop for each item. Keys help React identify which items have changed, been added, or been removed. This assists in efficient reconciliation.
4. **React Components Lifecycle**:
Understanding the React component lifecycle is crucial for reconciliation. Components have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. These methods allow you to perform actions at specific points in the component's lifecycle and are often used to trigger updates.
5. **React.memo**:
The React.memo higher-order component can be used to memoize functional components, preventing unnecessary renders if the props remain unchanged.

### React Fiber
React Fiber is a reimplementation of the React core algorithm. It was introduced in React 16 to improve the performance and responsiveness of React applications. The term "Fiber" refers to a set of techniques for rendering and updating user interfaces in a more incremental and asynchronous manner.

The key goals of React Fiber include:
1. **Incremental Rendering**: Instead of performing a large, synchronous update all at once, React Fiber allows rendering to be done in smaller chunks or increments. This helps to maintain a more responsive user interface, especially in cases where there are large and complex component trees.
2. **Prioritization and Scheduling**: Fiber introduces a priority and scheduling system, allowing React to prioritize and execute certain tasks ahead of others. This enables better handling of tasks like animations, ensuring smoother user experiences.
3. **Concurrency**: React Fiber paves the way for true concurrency in React applications. It allows the browser to interrupt rendering to handle more urgent tasks (such as user input or high-priority updates) and then resume rendering when resources are available.
4. **Error Boundaries**: Fiber introduces better error boundaries, making it easier to catch and handle errors during rendering. This prevents the entire application from crashing due to an error in a specific component.
