angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function ($scope) {

  $scope.dt = new Date();
  
  $scope.dateRange = {
      end: undefined,
      start: undefined 
  };
  
  $scope.$watch('dt',function(){    
    if(!$scope.dt){
        return;
    }
    
    if(!$scope.dateRange.start || $scope.dateRange.start > $scope.dt){
        $scope.dateRange.start = $scope.dt;         
    } else {
        $scope.dateRange.end = $scope.dt;
    }
            
    $scope.dt=null;            
  });    
    
  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);
      var start = new Date($scope.dateRange.start).setHours(0,0,0,0);
      var end = new Date($scope.dateRange.end).setHours(0,0,0,0);
      if (dayToCheck === start || dayToCheck === end) {
          return 'full';
      } else if (dayToCheck > start && dayToCheck < end) {
          return 'partially';
      };
    }
    return '';
  };
  
});