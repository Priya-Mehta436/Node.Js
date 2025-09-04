const http =  require('http');

const req = http.request('www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

