define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope', 'socket', function ($scope, socket) {

      $scope.socket = socket;

      socket.on('messageFromServer', function(msg) {
        $scope.receivedMsg = msg;
      });

      $scope.sendMessage = function() {
        socket.emit('messageFromClient', $scope.message);
      };

    }]);
});
