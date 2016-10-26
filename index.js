var angular = require("angular");
var uiRouter = require("angular-ui-router").default;

var app = angular.module('foo', [uiRouter]);

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
