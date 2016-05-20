# angular-ui-bootstrap-daterange-picker
A date picker the let's you select a date range. Based on Angular UI Bootstrap.

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
The component accepts a model (the `range` object we defined in the controller), and an optional `init` property. When user opens the date range picker, picker opens on the date specified in `init`.
To clear the current selection you need to set both `start` and `end` to null:
```
range.start = null;
range.end = null;
```

## Development Setup
Install dependencies:
`npm install`
Run the build:
`grunt`

## Demo App:
To make the demo app work, you need to run:
`bower install`

