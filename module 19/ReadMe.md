# Module 19 - Introduction to React Router Dom

### React Router DOM
React Router is a popular library for adding navigation to React applications. The react-router-dom package is specifically designed for web applications using React. 

### Installation
``` bash
    npm install react-router-dom
```
or
``` bash
    yarn add react-router-dom
```

### Setting up Routes
Create a new component for each page you want to navigate to. Let's say you have three components - **Home**, **About**, and **Contact**.
- **Home Page**
``` jsx
    import React from 'react';

    const Home = () => {
        return <div>Home Page</div>;
    };

    export default Home;
```
- **About Page**
``` jsx
    import React from 'react';

    const About = () => {
        return <div>About Page</div>;
    };

    export default About;
```
- **Contact Page**
``` jsx
    import React from 'react';

    const Contact = () => {
        return <div>Contact Page</div>;
    };

    export default Contact;
```

### create the App Component
Now, create your main App component where you'll define your routes.
``` jsx
    // App.js
    import React from 'react';
    import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    import Contact from './Contact';

    const App = () => {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    };

    export default App;
```

### Explaining the code:
- The **Router** component is used to wrap your application and provide the routing functionality.
- **Link** is used to create links to different routes.
- **Route** is used to define what component should be rendered for a given route.