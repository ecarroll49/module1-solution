(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.stateOfLunch = "";

  $scope.checkLunchItems = function () {
    var listOfLunchItems = $scope.lunchItems.split(",");
    if(listOfLunchItems == 0) {
      $scope.stateOfLunch = "Enter at least one item.";
    } else if (listOfLunchItems.length > 3) {
      $scope.stateOfLunch = "To much!";
    } else {
      $scope.stateOfLunch = "Enjoy!";
    };
  };

}

})();
