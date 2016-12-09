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
    var numberOfLunchItems = 0;
    // do NOT consider and empty item
    for( var x = 0; x < listOfLunchItems.length; x++) {
      if(/\S/.test(listOfLunchItems[x])) {
        ++numberOfLunchItems;
      }
    }
    if(numberOfLunchItems == 0) {
      $scope.stateOfLunch = "Enter at least one item.";
    } else if (numberOfLunchItems > 3) {
      $scope.stateOfLunch = "To much!";
    } else {
      $scope.stateOfLunch = "Enjoy!";
    };
  };

}

})();
