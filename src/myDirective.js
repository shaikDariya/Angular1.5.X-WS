import app from './mod';
import { debounce } from 'lodash';
app.directive('customIsolated', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      brick: '<',
      control: '='
    },
    link: function(scope, element) {
      scope.$watch(
        'brick',
        debounce(function(newvalue, oldvalue) {
          if (newvalue !== oldvalue) {
            scope.renderNew();
          }
        }, 200),
        true
      );
    },
    controller: function($scope) {
      $scope.renderNew = function() {
        console.log(' New Change Detected');
        $scope.control.count = Math.round(Math.random() * 10);
      };
    },
    template: `<p>I am Isolated Directive </p>
              <div ng-transclude></div>`
  };
});
