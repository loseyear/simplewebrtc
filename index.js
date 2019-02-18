var express = require('express'),
    app = express(),
    http = require('http').createServer(app)
app.use(express.static(__dirname))
http.listen(8080, function(){
    console.log('httpServer: listening on "http://localhost:8080"');
})
