import mod from './mod';

mod.controller('MyController', function($scope) {
  $scope.name = 'First Controller';
  $scope.brick = {
    name: ''
  };
  $scope.control = {
    count: 0
  };
  $scope.trigger = function() {
    $scope.brick.name = 'Brick ' + Math.floor(Math.random() * 10);
  };
});
