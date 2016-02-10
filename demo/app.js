(function () {
  angular.module('testApp', ['ngDateRange'])
  .controller('DaterangeDemoCtrl', function ($scope) {
    $scope.range = {
      start: undefined, 
      end: undefined
    };   
  }); 
})();

