(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.messagePlaceholder = "";
    $scope.messageColor = {};
    $scope.inputBroder = {};

    // Upon button click, invoke checkup event handler.
    $scope.checkup = function () {
      var foodEatenArray = $scope.itemsEaten.split(",");

      // Exclude emptey item(s).
      var itemsToBeCounted = excludeEmptyItem(foodEatenArray);

      // Examine user's lunch meal.
      if (itemsToBeCounted.length > 0) {
        if (itemsToBeCounted.length < 4) {
          $scope.messagePlaceholder = "Enjoy!";
        } else {
            $scope.messagePlaceholder = "Too much!";
        }

        $scope.messageColor = {'color' : 'green'};
        $scope.inputBroder = {'border' : '2px solid green'};

      } else {
          $scope.messagePlaceholder = "Please enter data first!";
          $scope.messageColor = {'color' : 'red'};
          $scope.inputBroder = {'border' : '2px solid red'};

      }
    };

    // Upon input box getting focus for subsequent user's input, clear placeholders.
    $scope.clearPlaceholders = function () {
      $scope.messagePlaceholder = "";
      $scope.itemsEaten = "";
      $scope.inputBroder = {};
    }
  }

  function excludeEmptyItem (array) {
    var validItemsArray = array.filter(function (item) {
      if (item.trim().length > 0) {
        return item;
      }
    });
    return validItemsArray;
  }

})();
