const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// configure middleware, routes, etc.

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

https.createServer(options, app).listen(443, function () {
  console.log('Listening on port 443');
});

/**You can generate a self-signed SSL certificate for testing purposes and save the key and certificate to files
 * openssl genrsa -out server.key 2048
 * openssl req -new -key server.key -out server.csr
 * openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
 */