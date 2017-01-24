(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.items = "";
  $scope.getWordCounter = function() {
    var cantidad = $scope.items.trim().split(',').length;
    if(cantidad<=3){
      return "Enjoy";
    }else if (cantidad>3) {
      return "Too much!";
    }

}

}

})();
