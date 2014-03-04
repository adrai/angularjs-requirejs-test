define(['./module'], function (services) {
  'use strict';

  services.factory('denorm', ['socket', 'todoService', function (socket, todoService) {

    socket.on('event', function(evt) {
      var todo = todoService.getTodos()[0];
      todo.content += ' ' + evt.event;
    });

    var denorm = {
    };

    return denorm;
  }]);
});