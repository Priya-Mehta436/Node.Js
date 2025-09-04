const request = require('./internals/request');

request.send = function() {
    console.log('custom send function');
}

request.send();