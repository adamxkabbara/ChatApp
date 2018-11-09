var express = require('express');
var http = require('http');
var app = express();
var httpServer = http.createServer(app);

var myLogStatement = function(req, res, next) {
    console.log("Received", req.method, "request for resource", req.path,
    "from", req.ip);
    next(); // calback to the middleware function
}

app.use(myLogStatement);

app.use(express.static('src'));

httpServer.listen(3000, function(){
    console.log("Listening on port 3000");
});