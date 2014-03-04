define(['./module', 'io'], function (services, io) {
  'use strict';

  services.factory('socket', function ($rootScope) {
    var socket = io.connect(window.location.protocol + '//' + window.location.host),
        sock;

    socket.on('connect', function() {
      $rootScope.$apply(function() {
        sock.connected = true;
      });
    });

    socket.on('disconnect', function() {
      $rootScope.$apply(function() {
        sock.connected = false;
      });
    });
    
    sock = {
      on: function(eventName, callback) {
        socket.on(eventName, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      },
      emit: socket.emit.bind(socket)
    };

    return sock;
  });
});