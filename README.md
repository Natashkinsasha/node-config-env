# node-config-env-value

A plug-in for [config](https://www.npmjs.com/package/config) module to add environment variables to the config file.


# Installation

Npm
```bush
npm install node-config-env-value
```

Yarn
```bush
yarn add node-config-env-value
```

# Quick start

```javascript

var config = require('node-config-env-value');

var NODE_ENV = config.get('NODE_ENV');

```