var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

filename = "index.html";
var buf = fs.readFileSync(filename,'utf-8');

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
