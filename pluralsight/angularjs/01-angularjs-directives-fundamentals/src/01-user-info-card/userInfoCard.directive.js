(function() {

  'use strict';

  angular
    .module( 'app' )
    .directive( 'userInfoCard', userInfoCard );

  function userInfoCard() {
    
    var directive = {
      template : "Name {{ vm.user.name }}",
      restrict : "E"
    };

    return directive;

  }
}());
