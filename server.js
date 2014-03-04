var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'client')));

// Handle Errors gracefully
app.use(function(err, req, res, next) {
  if(!err) return next();
  console.log(err.stack);
  res.json({error: true});
});

// Main App Page
app.get('/',  function (req, res) {
  res.render('index');
});

io.sockets.on('connection', function (socket) {
  // socket.emit('messageFromServer', 'gugus');
  socket.on('messageFromClient', function (data) {
    io.sockets.emit('messageFromServer', 'back from server: ' + data);
    io.sockets.emit('event', {
      event: data,
      payload: 'data'
    });
  });
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});