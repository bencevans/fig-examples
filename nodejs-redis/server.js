var express = require('express');
var http    = require('http');
var redis   = require('redis');
var app     = express();
var client  = redis.createClient(
  process.env.REDIS_1_PORT_6379_TCP_PORT,
  process.env.REDIS_1_PORT_6379_TCP_ADDR
  );

app.get('/', function(req, res, next) {
  client.incr('visitssss', function(err, visits) {
    if(err) return next(err);
    res.send('visits=' + visits);
  });
});

http.createServer(app).listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + (process.env.PORT || 3000));
});
