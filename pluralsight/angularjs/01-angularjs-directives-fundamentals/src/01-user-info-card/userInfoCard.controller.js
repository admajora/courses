(function() {

  'use strict';

  angular
    .module( 'app' )
    .controller( 'UserInfoController', UserInfoController );

  UserInfoController.$inject = [
    '$scope'
  ];

  function UserInfoController( $scope ) {
    
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
    $scope.user = {};

    ///////////// Methods
    vm.knightMe = function( user ) {
    
      user.rank = "knight";
    
    };

    /////////////
  }
}());
