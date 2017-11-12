(function(){
	'use strict'
	angular.module('Data')
	.controller('CategoriesController', CategoriesController);
	CategoriesController.$inject = ['MenuDataService', 'request'];
	function CategoriesController(MenuDataService, request){
		var categories = this;
		categories.items = request.data;
	}
})();
