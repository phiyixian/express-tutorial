const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.method);
    // console.log(req.url);

    const url = req.url;
    if(url === '/'){ // Home Page
        res.writeHead(200, {'content-type': 'text/html'});
        // console.log('User hit the server');
        res.write('<h1>Home Page</h1>');
        res.end();
    } //About Page
    else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        // console.log('User hit the server');
        res.write('<h1>About Page</h1>');
        res.end();
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'});
        // console.log('User hit the server');
        res.write('<h1>Page not found</h1>');
        res.end();
    }
})

server.listen(5000);