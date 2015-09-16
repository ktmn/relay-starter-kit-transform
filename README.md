# relay-starter-kit-transform

This is [relay-starter-kit](https://github.com/relayjs/relay-starter-kit) combined with [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

*Note: If you make changes to Relay container's fragments you'll still have to F5 to get the new props.*

# Relay Starter Kit

This kit includes an app server, a GraphQL server, and a transpiler that you can use to get started building an app with Relay. For a walkthrough, see the [Relay tutorial](https://facebook.github.io/relay/docs/tutorial.html).

# React Transform Boilerplate

* hot reloading React components;
* error handling inside component `render()` function;
* error handling for syntax errors (thanks, **[@glenjamin](https://github.com/glenjamin)**!)

---

## Installation

```
npm install
```

## Running

Start a local server:

```
npm start
```

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.js`, stop the server,
regenerate `data/schema.json`, and restart the server:

```
npm run update-schema
npm start
```