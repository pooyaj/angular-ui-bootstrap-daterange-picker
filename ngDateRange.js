(function () {
  'use strict';
  angular.module('ngDateRange', ['ng', 'ui.bootstrap'])
  .directive('dateRange', function () {
    return {
      restrict: 'AE',
  require: 'ngModel',
  template: '<uib-datepicker ng-model="dt" min-date="minDate" show-weeks="true" class="well well-sm" custom-class="getDayClass(date, mode)"></uib-datepicker>',
  link: function (scope, elem, attrs, ngModel) {
    scope.getDayClass = function (date, mode) {
        var dateRange = ngModel.$viewValue;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
          var start = new Date(dateRange.start).setHours(0, 0, 0, 0);
          var end = new Date(dateRange.end).setHours(0, 0, 0, 0);
          if (dayToCheck === start || dayToCheck === end) {
            return 'full';
          } else if (dayToCheck > start && dayToCheck < end) {
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
        if (!dateRange.start || dateRange.start > scope.dt) {
          dateRange.start = scope.dt;
          ngModel.$setViewValue(dateRange);
        } else {
          dateRange.end = scope.dt;
          ngModel.$setViewValue(dateRange);
        }
        scope.dt = null;
      });
    }
  };
});
})();