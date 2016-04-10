angular.module('app')
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");
    
    $stateProvider
      .state('editor', {
        url: "/",
        templateUrl: "app/templates/editor.html"
      })
      .state('viewer', {
        url: "/viewer",
        templateUrl: "app/templates/viewer.html"
      })
      ;
  }]);