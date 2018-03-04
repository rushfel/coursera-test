(function () {
'use strict';

angular.module('NarrowItDownApp')
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
  var service = this;

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

}

})();
