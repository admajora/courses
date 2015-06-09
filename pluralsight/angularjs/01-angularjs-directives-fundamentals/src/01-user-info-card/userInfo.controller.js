(function() {

  'use strict';

  angular
    .module( 'app' )
    .controller( 'UserInfoController', UserInfoController );

  UserInfoController.$inject = [];

  function UserInfoController() {
    
    var vm = this;

    ///////////// Properties
    vm.user = {
      name : 'Eric Douglas'
    };

    ///////////// Methods

    /////////////
  }
}());
