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

*default.json*
```json
{
    "server":{
        "hostname": "localhost",
        "port": 3000
    },
    "string": "test",
    "number": 4,
    "boolean": true,
}

```
*package.json*
```json
    ...
    "scripts": {
        "start": "server={port:4000} string=test2 number=1 boolean=false webpack-dev-server --hot --inline",
    },
    ...
```

*index.js*
```javascript

var config = require('node-config-env-value');

var NODE_ENV = config.get('NODE_ENV');

console.log(config)
/*
    Config {
        server: { hostname: 'localhost', port: 4000 },
        number: 1,
        boolean: false
        string: 'test2'
        ALLUSERSPROFILE: 'C:\\ProgramData',
        APPDATA: 'C:\\Users\\User\\AppData\\Roaming',
        ...
    }
*/
```