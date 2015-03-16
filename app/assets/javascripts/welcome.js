// This is your app.js file.
(function () {
  'use strict';

  angular.module('tilAPP', [
    'ngRoute',
    'Devise'
  ])

  .config(['$httpProvider', function($httpProvider) {
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
   }])
   
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/views/index.html'
      })
      .when('/newGrad', {
        templateUrl: 'assets/views/newGrad.html',
        controller: 'ProfileController as profileCtrl'
      })
      .when('/graduates', {
        templateUrl: 'assets/views/cardStackViews/alumniCardView.html',
        controller: 'CardController as cardCtrl'
      })
      .when('/employers', {
        templateUrl: 'assets/views/cardStackViews/employersCardView.html',
        controller: 'CardController as cardCtrl'
      })
      .when('/jobListings', {
        templateUrl: 'assets/views/cardStackViews/jobsCardView.html',
        controller: 'CardController as cardCtrl'
      })
      .when('/not-found', {
        templateUrl: 'assets/views/notFoundView.html'
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  }])

  .constant('_',_);

})();
