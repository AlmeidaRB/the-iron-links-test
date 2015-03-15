// This is your app.js file.
(function () {
  'use strict';

  angular.module('tilAPP', [
    'ngRoute',
    'Devise'
  ])
  .config(function($httpProvider) {
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
   })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/views/index.html'
      })
      .when('/newGrad', {
        templateUrl: 'assets/views/newGrad.html',
        controller: 'ProfileController as profileCtrl'
      })
  })
  .constant('_',_);
})();
