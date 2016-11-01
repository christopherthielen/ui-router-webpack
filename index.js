require("angular");
require("angular-ui-router");

var app = angular.module('foo', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider.state({ 
    name: 'home', 
    url: '', 
    template: '<h1>hello world</h1>' +
              '<h3>Angular: {{ angular.version.full }}</h3>',
    controller: function($scope) {
      $scope.angular = angular;
    }
  });
});
