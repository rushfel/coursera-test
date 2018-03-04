(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var menu = this;

  menu.narrowItDownForMe = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.found = response.data.menu_items;
    });
  };

}

})();
