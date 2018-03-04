(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  listToBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.checkOffItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var listBought = this;

  listBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
  var service = this;

  // To buy shopping listToBuy
  var toBuyItems = [
    { name: "cookies1", quantity: 10 },
    { name: "cookies2", quantity: 7 },
    { name: "cookies3", quantity: 8 },
    { name: "cookies4", quantity: 5 },
    { name: "cookies5", quantity: 4 },
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 7 },
    { name: "nutella", quantity: 8 },
    { name: "bread", quantity: 5 },
    { name: "milk", quantity: 4 },
    { name: "eggs", quantity: 5 },
    { name: "apple", quantity: 1 },
    { name: "banana", quantity: 2.5 }
  ];

  // Bought shopping listToBuy
  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.checkOffItem = function (index) {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  };

}

})();
