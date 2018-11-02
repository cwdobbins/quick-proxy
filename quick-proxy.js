var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
var argv = require('minimist')(process.argv.slice(2));


var rewritePath = `^${argv.path}`;

var config = {
    target: argv.target,
    secure: argv.secure || true,
    // pathRewrite: { [rewritePath]: '' },
    changeOrigin: true,
    logLevel: "debug"
};

app.use('/', proxy(config));
app.listen(argv.localPort);
