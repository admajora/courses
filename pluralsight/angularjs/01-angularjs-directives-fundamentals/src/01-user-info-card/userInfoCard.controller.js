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
      name : 'Luke Skywalker',
      address : {
        street : 'PO Box 123',
        city : 'Secret Rebel Base',
        planet : 'Yavin 4'
      },
      friends : [
        'Han',
        'Leia',
        'Chewbacca'
      ]
    };

    ///////////// Methods

    /////////////
  }
}());
