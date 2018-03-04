(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

// .factory('FoundItemsFactory', FoundItemsFactory)

function FoundItemsDirective () {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController () {
  var menu = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var menu = this;

  menu.narrowItDownForMe = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.found = response.data.menu_items;
      console.log('menu.found: ', menu.found);
    });
  };

  menu.removeItem = function (itemIndex) {
    // MenuSearchService.removeItem(itemIndex);
    menu.found.splice(itemIndex, 1);
    console.log('menu.found: ', menu.found);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
  var service = this;

  // service.found = menu.found;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http(
      {
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
      .then(function (result) {
        console.log('searchTerm: ', searchTerm);
        var foundItems = result;
        var foundItemsTemp = foundItems.data.menu_items;
        var foundItemsTempLength = foundItemsTemp.length;
        var matchedItems = [];

        for (var i = 0; i < foundItemsTempLength; i++) {
          if (foundItemsTemp[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
            matchedItems.push(foundItemsTemp[i]);
          }
        }

        foundItems.data.menu_items = matchedItems;
        return foundItems;
      });
  };

  // service.removeItem = function (itemIndex) {
  //   found.splice(itemIndex, 1);
  //   console.log('menu.found: ', found);
  // };

}

})();
