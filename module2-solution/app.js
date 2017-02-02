(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var buy = this;

buy.items = ShoppingListCheckOffService.getItems();

buy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
};
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.boughtlist = ShoppingListCheckOffService.getItemsbought();

}


function ShoppingListCheckOffService() {
  var service = this;

  var items = [{
  name: "Milk",
  quantity: 10},
  {name: "Donuts",
  quantity: 80},
  {name: "Cookies",
  quantity: 65},
  {name: "Chocolate",
  quantity: 32},
  {name: "Peanut Butter",
  quantity: 98}];

  var boughtlist = [];

service.buyItem = function (itemIndex) {

boughtlist.push(items[itemIndex])
  items.splice(itemIndex,1);
};


  service.getItems = function () {
    return items;
  };
  service.getItemsbought = function () {
    return boughtlist;
  };
}

})();
