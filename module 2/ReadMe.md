# Module 2 - Using React via CDN

CDN - Context Delivery Networks
CDN for React.js & ReactDOM

``` html

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

```
Why two packages?
- React package has logic that is valid across web and moblie applications
- ReactDOM is for handling the DOM manipulations.


What is JSX?
- React has a nomenclature called JSX, which allows as to write HTML like structure inside JavaScript which gets converted into React.createElement()
- In JSX, HTML attributes are written in camel casing.

### React.createElement()
- createElement() function is used to create a React Element.

### React Element
- Elements are the smallest building blocks of React apps.
- A React element describes what we want to see on the screen.
- A React element is a plain object, which contains all the necessary details about the element.  type, key ref, prop are some of the key of the object.

### Chidren in React
- Whatever content present inside a React element is a children
- If more than one child is present then it will be wrapped inside an array and each child will a have a unique key to identify.
