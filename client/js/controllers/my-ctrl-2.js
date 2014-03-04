define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', 'todoService', function ($scope, todoService) {
      $scope.firstTodo = todoService.getTodos()[0];
    }]);
});
