# angular-ui-bootstrap-daterange-picker
This is an example code for using angular ui bootstrap date picker to select a date-range: 

## Controller 
In the controller, inject `ngDateRange` and define an object literal with two keys: `start` and `end`
```
  angular.module('testApp', ['ngDateRange'])
  .controller('DaterangeDemoCtrl', function ($scope) {
    $scope.range = {
      start: undefined, 
      end: undefined
    };   
  }); 
```

## View
Add the component in the view: 
`<date-range ng-model='range' init='range.end'></date-range>`

the component accepts a model (the `range` object we defined in the controller), and an optional `init` property. When user opens the date range picker, picker opens on the date specified in `init`. 
