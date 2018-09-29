# Reproduce [Hot reload issue](https://github.com/webpack/webpack-dev-server/issues/1385)

## Steps

### Run the app

```sh
// start the backend server on port 8080
yarn server

// start webpack dev server on port 9000
yarn hot
```

### Update the source

Change the text content of the container element in `bundle.js`.

### Issue

Error in the browser's console: `GET http://localhost:8080/08a64a5d1bd954786070.hot-update.json 404 (Not Found)`

The dev server tries to fetch from the backend on port 8080 and not from webpack on port 9000.
