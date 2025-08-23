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
