var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

filename = "index.html";
var buffer = new Buffer(stats.size);

buffer = fs.readFileSync(filename);
var data = buffer.toString("utf8", 0, buffer.length);

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
