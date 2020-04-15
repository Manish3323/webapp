## Sample webapp project

This is a basic project having frontend, backend modules which can be deployed independent of each other

It uses:
* Akka HTTP with scala for backend server
* React with Typescript for frontend components.
* Webpack for bundling resources( js, css, html, ts, etc).
* Jest as a tool for testing.

---

### To start backend
`sbt ~backend/reStart`

### To start frontend app in development mode
`cd frontend && npm start`

### To bundle frontend app for production distribution
`cs frontend && npm run build`
