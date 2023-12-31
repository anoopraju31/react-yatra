# Module 3 - Setup React via Webpack

### node_modules
- node_modules is a folder containing packages that npm fetches from the CDN and stored local machine. 
- This prevent us from making network calls again and again to fetch those packages.

### package.json
- In Node.js, the package.json file is a key component of a Node.js project. 
- It serves several purposes, including:
    - Metadata: It contains metadata about the project, such as the project name, version, description, author, and license.
    - Dependencies: 
        -It specifies the project's dependencies, including the Node.js modules (packages) that the project depends on. 
        - These dependencies can be both runtime dependencies (required for the application to run) and development dependencies (required for development, testing, etc.).
    - Scripts: It includes scripts that can be executed using npm.
    
- In the dependencies section of a package.json file in Node.js, you may see symbols like ^ and ~ before the version numbers. These symbols are used to specify the range of acceptable versions for a package.
    - Caret(^)
        - If the version number starts with a caret (^), it means that the package manager (such as npm) is allowed to update to the latest compatible minor or patch version. It won't update to a new major version.
        - For example, if you have "express": "^4.17.1", it means that npm can install any version from 4.17.1 up to, but not including, 5.0.0.
    - Tlida(~)
        - If the version number starts with a tilde (~), it means that the package manager is allowed to update to the latest compatible patch version. It won't update to a new minor or major version.
        - For example, if you have "mocha": "~8.4.0", it means that npm can install any version from 8.4.0 up to, but not including, 8.5.0.

### What does Bundlers
- Compiles the react code to JavaScript
- Code Minification
- Memory Optimizations
- Reading files from node_modules
- Compiling CSS
