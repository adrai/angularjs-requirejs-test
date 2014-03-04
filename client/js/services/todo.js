define(['./module'], function (services) {
  'use strict';

  services.factory('todoService', ['$rootScope', function ($rootScope) {
    var todos = [
      { title: 'A', content: 'My first todo!' },
      { title: 'B', content: 'My seond todo!' }
    ];

    return {
      getTodos: function() {
        return todos;
      }
    };
  }]);
});