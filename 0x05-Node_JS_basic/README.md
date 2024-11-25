# 0x05. NodeJS Basics

## Node.js Features and Development Guide

## Getting Started

**Prerequisites**

1. Install Node.js (version 12.x or higher).
2. Install npm (bundled with Node.js).
3. Install additional tools (nodemon, babel):

```
npm install -g nodemon @babel/node @babel/core @babel/preset-env express
```

## Features and Examples\

**1. Running JavaScript Using Node.js**

```
node example.js
```

**2. Using Node.js Modules**

Node.js provides built-in modules for various tasks, such as fs for file handling and os for system information.

Example: Using the os Module

```
const os = require('os');
console.log(`System Platform: ${os.platform()}`);
console.log(`Free Memory: ${os.freemem()}`);
```

**3. Reading Files with Node.js**

The fs module is used to interact with the file system.

```
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
```

**4. Accessing Command-Line Arguments and Environment Variables**

Use the process object to access command-line arguments and environment variables.

```
const args = process.argv.slice(2); // Skip the first two arguments (node path and script path)
console.log('Command-line arguments:', args);
```

Example: Environment Variables

```
console.log('Environment Variables:', process.env);
```

**5. Creating a Small HTTP Server Using Node.js**

The http module can create simple HTTP servers.

```
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

**6. Creating a Small HTTP Server Using Express.js**

Express.js simplifies server development with an intuitive API.

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000/');
});
```

**7. Creating Advanced Routes with Express.js**

Express.js supports route parameters, query strings, and middleware.

```
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Route with a parameter
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Route with query strings
app.get('/search', (req, res) => {
    res.send(`Search Query: ${req.query.q}`);
});

app.listen(3000, () => {
    console.log('Advanced Express server running at http://localhost:3000/');
});

```

**8. Using ES6 Features with Babel-Node**

Use modern JavaScript features with Babel transpiling.

```
npm install @babel/node @babel/core @babel/preset-env --save-dev
```

Configuration: babel.config.json

```
{
    "presets": ["@babel/preset-env"]
}
```

**9. Using Nodemon for Faster Development**

Nodemon automatically restarts the server on file changes, improving development speed.

Install Nodemon globally

```
npm install -g nodemon
```

Running with Nodemon

```
nodemon server.js
```

### Testing and Debugging

1. Use nodemon during development to reload the server automatically.
2. Use environment variables to customize configurations.
3. Write tests using frameworks like Jest or Mocha for robust applications.

## Learning Resources

1. [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

2. [Process API doc](https://node.readthedocs.io/en/latest/api/process/)

3. [Child process](https://nodejs.org/api/child_process.html)

4. [Express getting started](https://intranet.alxswe.com/rltoken/XsfrhG9NRLuuaTpVZlZv_g)

5. [Mocha documentation](https://mochajs.org/)

6. [Nodemon documentation](https://github.com/remy/nodemon#nodemon)