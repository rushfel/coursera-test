// (function () {
// 'use strict';

// angular.module('ShoppingListCheckOff', [])
// .controller('ToBuyController', ToBuyController)
// .controller('AlreadyBoughtController', AlreadyBoughtController)
// .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController.$inject = ['ShoppingListCheckOffService'];
// function ToBuyController (ShoppingListCheckOffService) {
//   var listToBuy = this;

//   listToBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

//   listToBuy.removeItem = function (itemIndex) {
//     ShoppingListCheckOffService.checkOffItem(itemIndex);
//   };
// }

// AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
// function AlreadyBoughtController (ShoppingListCheckOffService) {
//   var listBought = this;

//   listBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
// }

// function ShoppingListCheckOffService () {
//   var service = this;

//   // To buy shopping listToBuy
//   var toBuyItems = [
//     { name: "cookies", quantity: 10 },
//     { name: "chips", quantity: 7 },
//     { name: "nutella", quantity: 8 },
//     { name: "bread", quantity: 5 },
//     { name: "milk", quantity: 4 },
//     { name: "eggs", quantity: 5 },
//     { name: "apple", quantity: 1 },
//     { name: "banana", quantity: 2.5 }
//   ];

//   // Bought shopping listToBuy
//   var boughtItems = [];

//   service.getToBuyItems = function () {
//     return toBuyItems;
//   };

//   service.getBoughtItems = function () {
//     return boughtItems;
//   };

//   service.checkOffItem = function (index) {
//     boughtItems.push(toBuyItems[index]);
//     toBuyItems.splice(index, 1);
//   };

// }

// })();
!function(){"use strict";function t(t){this.toBuyItems=t.getToBuyItems(),this.removeItem=function(e){t.checkOffItem(e)}}function e(t){this.boughtItems=t.getBoughtItems()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",function(){var t=this,e=[{name:"cookies",quantity:10},{name:"chips",quantity:7},{name:"nutella",quantity:8},{name:"bread",quantity:5},{name:"milk",quantity:4},{name:"eggs",quantity:5},{name:"apple",quantity:1},{name:"banana",quantity:2.5}],n=[];t.getToBuyItems=function(){return e},t.getBoughtItems=function(){return n},t.checkOffItem=function(t){n.push(e[t]),e.splice(t,1)}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
