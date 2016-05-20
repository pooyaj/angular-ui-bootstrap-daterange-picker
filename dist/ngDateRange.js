(function () {
  'use strict';
  angular.module('ngDateRange', ['ng', 'ui.bootstrap'])
  .directive('dateRange', function () {
    return {
      restrict: 'AE',
      require: 'ngModel',
      scope: {
        externalModel: "=ngModel"
      },
      template: '<uib-datepicker ng-model="dt" min-date="minDate" show-weeks="false" class="well well-sm" custom-class="getDayClass(date, mode)"></uib-datepicker>',
      link: function (scope, elem, attrs, ngModel) {
        // Sets the CSS for the selected date "square"
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
              } else if (dayToCheck > start && dayToCheck < end) {
                return 'partially';
              }
            }
            return '';
        };
        // Watch for changes in the internal model
        // and update the viewValues accordingly
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
        // This will allow us to control the component externally
        scope.$watch('externalModel', function () {
          if (!scope.externalModel.start && !scope.externalModel.end) {
            // 'dt' is undefined when loading the component for the first time
            // so we set it to a falsy vakue to triger the dt 'watch'
            if (scope.dt === undefined) {
              scope.dt = null;
            } else {
              scope.dt = undefined;
            }
          }
        });
      }
    };
  });
})();