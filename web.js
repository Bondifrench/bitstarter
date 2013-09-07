var express = require('express');
var app = express();
var fs = require('fs');

var filename = "index.html";
var buf = fs.readFileSync(filename,'utf-8');

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
