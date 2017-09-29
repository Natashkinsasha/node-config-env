var config = require('config');

module.exports = function () {
    var t = config;
    config.util.extendDeep(t, parse(process.env));
    config.util.attachProtoDeep(t);
    config.util.runStrictnessChecks(t);
    return config;
}();


function parse(config) {
    var newConfig = Object.assign({}, config);
    newConfig = parseNumber(newConfig);
    newConfig = parseBoolean(newConfig);
    return newConfig;
}
function parseBoolean(obj) {
    return Object.keys(obj).reduce(function (result, key) {
        var value = obj[key];
        var parsedValue = value === 'true' ? true : value === 'false' ? false : value;
        if (typeof parsedValue === 'boolean') {
            result[key] = parsedValue;
        } else if (value.constructor === Object) {
            result[key] = parseBoolean(value);
        } else {
            result[key] = value;
        }
        return result;
    }, {});
}

function parseNumber(obj) {
    return Object.keys(obj).reduce(function (result, key) {
        var value = obj[key];
        var parsedValue = +value;
        if (typeof value === 'string' && !isNaN(parsedValue)) {
            result[key] = parsedValue;
        } else if (value.constructor === Object) {
            result[key] = parseNumber(value);
        } else {
            result[key] = value;
        }
        return result;
    }, {});
}
