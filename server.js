const connect = require('connect');
const app = connect();

function html(req, res, next){
    res.setHeader('Content-type','text/html' );
    res.end('<h1> Hello from NodeJS Application as html</h1>');
};
function local(req, res, next){
    res.setHeader('Content-type','text/plain' );
    res.end('Hello from NodeJS Application');
};
function appJson(req, res, next){
    res.setHeader('Content-type','application/json' );
    res.end('  “message”: “Hello from NodeJS Application as json”');
};
app.use('/html', html);
app.use('/', local);
app.use('/json', appJson);

app.listen(3000);