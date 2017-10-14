(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItems);

function foundItems() {
  var ddo = {
    template: '<ul ng-repeat="i in item.found"><li><strong>ShortName:</strong> {{ i.short_name }}</li><li><strong>Name:</strong> {{ i.name }}</li><li><strong>Description:</strong> {{ i.description }}</li><button ng-click="item.onRemove({index: $index});">Dont want this one!</button></ul>',
    restrict: 'E',
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
  item.found = true;
  item.search = "";
  item.searchTerm = "";
  var searchService = MenuSearchService;
  
  item.dataSearch = function(searchTerm){
    item.found = MenuSearchService.getDataFound(searchTerm);
  }

  item.remove = function(index) {
    console.log(index);
    item.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['ApiBasePath','$http'];
function MenuSearchService(ApiBasePath,$http) {
  var service = this;
  service.search = "";
  service.dataRetrieve = false;
  service.foundItems = [];
  service.getData = function(){
    var response = $http({
      method: "GET",
        url: (ApiBasePath + "/menu_items.json")
    });

  return	response;
  }
  var promise = service.getData();

  promise.then(function(response){
    service.items = response.data;
    service.dataRetrieve = true;
  })
  .catch(function(error){
    console.log("error");
  });
  service.getMatchedMenuItems = function(searchTerm){

    if (searchTerm.length === 0){
      return false;
    }

    var found = [];

    for (var i = 0; i < service.items.menu_items.length; i++){
      if (service.items.menu_items[i].description.indexOf(searchTerm) !== -1){
        found.push(service.items.menu_items[i]);
      }
    }

    if (found.length === 0){
      return false;
    }

    return found;
  }
  service.getDataFound = function(searchTerm){
    service.foundItems = service.getMatchedMenuItems(searchTerm);
    return service.foundItems;
  }
  service.removeItem = function(index){
    service.foundItems.splice(index, 1)
  }
}

})();
