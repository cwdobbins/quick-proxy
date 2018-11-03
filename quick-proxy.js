var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
var argv = require('minimist')(process.argv.slice(2));

var config = {
    target: argv.target,
    secure: argv.secure || true,
    changeOrigin: true,
    logLevel: "info"
};

app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", req.header('Origin'));
	  res.header("Access-Control-Allow-Methods", "*");
	  res.header("Access-Control-Allow-Headers", "*");
	  next();
});

app.use('/', proxy(config));
app.listen(argv.localPort);
