
# Compatibility between react, preact and inferno

This repo wants to be a quick way of comparing [react](https://reactjs.org/), [preact](https://preactjs.com/) and [inferno](https://infernojs.org/).

Both preact and inferno have a compatibility layer that should minimize the changes needed for a migration from react.

## Installation
```
npm install
```

## Usage
```
// run the app using react at localhost:3101
npm run react

// run the app using preact at localhost:3102
npm run preact

// run the app using inferno at localhost:3103
npm run inferno
```

## React hot loader development
This repo was created to explore a way of making react-hot-loader work for preact and inferno. There are RHL replacements for every library at the src/rhl folder, and webpack configuration is ready to load RHL version from there.
