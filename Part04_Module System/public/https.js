const request = require('./request.js');

request.send = function() {
    console.log('custom send function');
}

request.send();