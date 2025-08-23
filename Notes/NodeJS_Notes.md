# NodeJS
## What is NodeJs
*  NodeJS is An Asynchronous event-driven <B> JavaScript runtime<B>, Node.js is designed to build scalable network applications
* JavaScript was created to run in browser which meant we cannot create any program that's not website
* NodeJS uses V8 engine - comes from chromium which uses C & C++ - It is super powerful and powers chrome browser
* It Allows us to create Applications using JavaScript
* When stricly speaking, NodeJS is not framework it is a RUNTIME ENVIROMENT.

### What is NPM
* NPM is Node Package Manager created by Git Organisation
* It has Different tools built in it
* It comes pre-bundled with NodeJS

### CJS - Common JS
- it uses <b> require <b>  method to get hold of.

### ESM -  ECMAScript
- After Node v12 Node has enabled ECMAScript Modules
- This enables us to use <b> improt <b> instead of <b> require <b> which provides standardized way of using JavaScript to be consistent on the front-end and back-end

### Using ESM
- To use ESM we have to add "type": "module" property in package.json
- By Default we use commonjs

# ExpressJs
- It is a javaScript framework which allows us to build backend.

## Requests
- GET: used to request resource
- POST: Sending resource
- PUT: Replace resource
- PATCH: fix or update resource
- DELETE: Delete resource

#### POST
body-parsing middleware is required to be able to work with body (not the query params)

    -   app.use(express.json());
    -   app.use(express.urlencoded({ extended: true }));

### HTTP return codes cheat sheet
1. Hold on
2. Here you go
3. Go away
4. You fu***d up
5. I fu***d up
