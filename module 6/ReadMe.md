# Module 6

### Topics to cover:
- **How to render data from lists**
- **Importance of keys prop**

### How to render data from list
- In ReactJS, rendering data from a list involves using the **map()** function to iterate over each item in the list and create React elements for each item.
- Here's is a simple example of how we can render data from a list in React.
``` jsx
    import React from 'react';

    const ListRenderer = ({ items }) => {
    return (
        <ul>
            {items.map(({id, item}) => (
                <li key={id}>{item}</li>
            ))}
        </ul>
    );
    };

    export default ListRenderer;
```
- In this example, the **ListRenderer** component receives a prop called **items**, which is an array of data we want to render. Inside the component, the **map()** function is used to iterate over each item in the array. 
- The key attribute is set to the **id** to help React efficiently update the rendered components whem the list changes.
- We can then use the **ListRenderer** component in another component by passing the list of items as prop.
``` jsx
    import React from 'react';
    import ListRenderer from './ListRenderer';

    const App = () => {
        const data = [
            { id: 'a', text: 'text - 1' },
            { id: 'b', text: 'text - 2' },
            { id: 'c', text: 'text - 3' },
            { id: 'd', text: 'text - 4' },
            { id: 'e', text: 'text - 5' },
            { id: 'f', text: 'text - 6' },
            { id: 'g', text: 'text - 7' },
        ];

        return (
            <div>
                <h1>List Rendering Example</h1>
                <ListRenderer items={data} />
            </div>
        );
    };

    export default App;
```
- In this example the **App** component renders the **ListRenderer** component and passes the **data** array as the **items** prop.

### Importance of key prop
- The **key** prop in React is a special and required prop that we use when rendering lists of elements.
- When we create a list of elements using the **map()** function or any other method. React needs a way to uniquely identify each element in the list. The **key** prop provides this unique identifier.
- React uses the **key** to efficiently update the UI when the list changes. When items are added, removed or reordered in the list, React uses the **key** to identify which specific elements have changed. Without the **key**, React might have to re-render the entire list, which can be inefficient and lead to performance issues.
- Things to know about **key** prop:
    - **Uniqueness**
        - The key value must be unique among siblings.
        - Within a particular array of elements each key should be unique.
    - **Stability**
        - The **key** should remain stable across re-rendering.
        - If the key of an element changes between renders, React may consider it a different element and re-render it unnecessarily.
    - **Reversed Word**
        - The word **key** in React is reserved and we should use it specifically for this purpose.

### Using index of list as key
``` jsx
    const ListRenderer = ({ items }) => {
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    };
```
In this example, **key={index}** is used as the **key** prop. While using the array index as a **key** is a common practice, it's not always the best choice, especially if the list can be dynamically re-ordered or filtered. In such cases, it's better to use a unique identifier from the data if avaliable.