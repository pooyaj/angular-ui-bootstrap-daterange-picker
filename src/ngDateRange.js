(function () {
  'use strict';
  angular.module('ngDateRange', ['ng', 'ui.bootstrap'])
  .directive('dateRange', function () {
    return {
      restrict: 'AE',
  require: 'ngModel',
  template: '<uib-datepicker ng-model="dt" init-date="initVal" show-weeks="false" class="" custom-class="getDayClass(date, mode)"></uib-datepicker>',
  scope: {
    init: '='
  },
  link: function (scope, elem, attrs, ngModel) {
    if (scope.init && typeof scope.init.getTime === "function")
      scope.initVal = new Date(scope.init.getTime());    
    scope.getDayClass = function (date, mode) {
        var dateRange = ngModel.$viewValue;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
          var start = new Date(dateRange.start).setHours(0, 0, 0, 0);
          var end = new Date(dateRange.end).setHours(0, 0, 0, 0);
          if (dayToCheck === start) {
            return 'full-start';
          } else if (dayToCheck === end) {
            return 'full-end';
          } else if (start && end && dayToCheck > start && dayToCheck < end) {
            return 'partially';
          };
        }
        return '';
      };
      scope.$watch('dt', function () {
        if (!scope.dt) {
          return;
        }
        var dateRange = ngModel.$viewValue;
        console.log(dateRange);
        if (!dateRange.start || dateRange.start > scope.dt) {
          dateRange.start = scope.dt;
          ngModel.$setViewValue(dateRange);
        } else {
          scope.dt.setHours(23, 59, 59, 59)
          if (dateRange.end && dateRange.end.getTime() === scope.dt.getTime()) {
             dateRange.end = void 0;
             dateRange.start = void 0;
          } else {
            dateRange.end = scope.dt;  
          }          
          ngModel.$setViewValue(dateRange);
        }
        scope.dt = null;
      });
    }
  };
});
})();