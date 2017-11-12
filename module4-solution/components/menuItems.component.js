(function (){
	'use strict';
	angular.module('MenuApp')
	.component('menuItems',{
		templateUrl: 'src/components/menuItems-component.html',
		bindings: {
			items: '<'
		}
	});

})();
