(function() {
  
  'use strict';

  angular
    .module( 'jobApp' )
    .controller( 'jobController', jobController );

  jobController.$inject = [];

  function jobController() {

    var vm = this;

    ///////////// Properties
    vm.title = 'JobFinder';
    vm.jobs  = [
      {
        title : 'Sales Person',
        description : 'you will fight dragons'
      },
      {
        title : 'Accoutant',
        description : 'you will use the keyboard'
      }
    ];

    ///////////// Public Methods

    ///////////// Private Methods

    ///////////// Methods Declarations

  }

}());