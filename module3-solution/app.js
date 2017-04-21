(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.factory('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    template: '<li ng-repeat="i in item.found">{{ i.name }} <button ng-click="item.onRemove({index: $index});">Dont want this one!</button></li>',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: ItemsDirectiveController,
    controllerAs: 'item',
    bindToController: true
  };

  return ddo;
}

function ItemsDirectiveController() {
  var item = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var item = this;

  var searchService = MenuSearchService;

  item.searchTerm = "";

  item.search = function () {
    searchService.getMatchedMenuItems(item.searchTerm).then(function(found) {
      item.found = found;
    });
  }

  item.remove = function(index) {
    console.log(index);
    item.found.splice(index, 1); 
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  var url = 'https://davids-restaurant.herokuapp.com/menu_items.json';

  service.getMatchedMenuItems = function(searchTerm) {
    return $http.get(url).then(function (result) {
      var items = result.data.menu_items;

      var foundItems = items.filter(function(item) {
        return item.description.includes(searchTerm);// item.description === searchTerm;
      });

      // return processed items
      return foundItems;
    });
  };

  return service;
}

})();
