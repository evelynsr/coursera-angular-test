(function (){
	'use strict';
	angular.module('Data')
	.controller('MenuItemsController', MenuItemsController);
	MenuItemsController.$inject = ['MenuDataService', 'request'];
	function MenuItemsController(MenuDataService, request){
		var menu = this;
		menu.items = request.data;
	}
})();
