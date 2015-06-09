(function() {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'userInfoCard', userInfoCard );

  function userInfoCard() {
    
    var directive = {
      templateUrl : "userInfoCard.html",
      restrict : "E",
      controller : ExampleController
    };

    return directive;

  }

  function ExampleController( $scope ) {
  
    $scope.knightMe = function( user ) {
      user.rank = 'knight';
    }
  
  }
}());
