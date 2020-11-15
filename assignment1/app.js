(
  function() {
    'use strict';
    angular.module('Assignment1App', [])
    .controller('Assignment1Controller', Assignment1Controller);
    Assignment1Controller.$inject = ['$scope'];
    function Assignment1Controller ($scope) {
      $scope.message = '';

      let removeEmptyStringsFromArray = function (items) {
        for (var i = 0; i < items.length; i++) {
          let singleItem = items[i];
          if (singleItem.trim().length === 0) {
            items.splice(i,1);
            if (i <= items.length - 1) {
              i--;
            }
          }
        }
      }

      let checkIfTooMuch = function (inputValue) {
        let items = inputValue.split(',');
        removeEmptyStringsFromArray(items);
        if (items.length <= 3) {
          return false;
        } else {
          return true;
        }
      }

      $scope.recalculate = function() {
        if (!$scope.lunchMenu || $scope.lunchMenu.length === 0) {
          $scope.message = 'Please enter data first!';
          $scope.messageColor = 'red';
          return;
        }
        if (checkIfTooMuch($scope.lunchMenu)) {
          $scope.message = 'Too much!';
          $scope.messageColor = 'green'
        } else {
          $scope.message = 'Enjoy!';
          $scope.messageColor = 'green'
        }

      }

    };
  }
)();
