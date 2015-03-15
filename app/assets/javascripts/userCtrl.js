(function () {
  "use strict";
  var tilAPP = angular.module('tilAPP');
  tilAPP
    .config(['$httpProvider', function($httpProvider) {
       $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
     }])
    .controller('userCtrl', ['$routeParams', '$location', '$scope', '_', 'Auth', function($routeParams,$location,$scope,_,Auth){

      $scope.setUser = function() {
        Auth.currentUser().then(function(user) {
          $scope.currentUser = user;
          $scope.error_message = '';
        },function(error){
          $scope.currentUser = '';
          $scope.error_message = error;
          console.log(error);
        });
      };
      
      $scope.loggedIn = function() {
        return Auth.isAuthenticated();
      };

      $scope.submitSignUp = function() {
        var credentials = $scope.signUpCredentials;
        Auth.register(credentials).then(function(user) {
          $scope.setUser();
          $scope.signUpCredentials='';
          $location.path('/newGrad');
        },function(error){
        $scope.error_message = error;
        console.log(error);

      });
    };
      $scope.submitLogin = function() {
        var credentials = $scope.loginCredentials;
        Auth.login(credentials).then(function(user) {
          console.log(user);
          $scope.setUser();
          $scope.loginCredentials='';
        }, function(error) {
          $scope.error_message = error;
          console.log(error);

        });
      };

      $scope.submitLogout = function() {
        Auth.logout().then(function(user) {
          $scope.setUser();
        });

      };
      $scope.setUser();

    }]);

})();
