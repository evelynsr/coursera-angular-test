(function(){
	'use strict';
	angular.module('MenuApp')
	.component('menuCategories', {
		templateUrl: 'src/components/categories-component.html',
		bindings: {
			items: '<'
		}
	});
})();
