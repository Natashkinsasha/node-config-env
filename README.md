# node-config-env

A plug-in for [config](https://www.npmjs.com/package/config) module to add environment variables to the config file.


# Installation

Npm
```javascript
npm install node-config-env
```

Yarn
```javascript
yarn add node-config-env
```

# Quick start

```javascript

var config = require('node-config-env');

var NODE_ENV = config.get('NODE_ENV');

```