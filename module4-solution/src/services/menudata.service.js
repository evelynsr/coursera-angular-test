(function (){
	'use strict';
	angular.module('Data')
	.service('MenuDataService', MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
	MenuDataService.$inject = ['ApiBasePath', '$http'];
	function MenuDataService(ApiBasePath, $http){
		var service = this;
		service.GetAllCategories = function(){
			var response = $http({
				method: "GET",
				url: (ApiBasePath + "/categories.json")
			});
			return	response;
		}
		service.GetItemsForCategory = function(category){
			var response = $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json?category=" + category)
			});
			return	response;
		}
	}
})();
