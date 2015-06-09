(function() {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'userInfoCard', userInfoCard );

  function userInfoCard() {
    
    var directive = {
      templateUrl : "userInfoCard.html",
      restrict : "E"
    };

    return directive;

  }
}());
