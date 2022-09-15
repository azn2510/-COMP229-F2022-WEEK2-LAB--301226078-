const http = require('http');
const url = require('url')

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    if (queryObject ['a'] === 'a'){
    res.setHeader(200, {'Content-Type': 'text/html'});
        res.end('<h1> Hello from NodeJS Application as html</h1>');
    }else{
        res.writeHead(200, {
            'Content-Type': 'text/plain'});
            res.end('Hello from NodeJS Application');
        }
    }).listen(3000);

  