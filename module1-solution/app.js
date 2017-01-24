(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.items = "";
$scope.message = "";
$scope.obj = "";
var cantidad = 0;
  $scope.getWordCounter = function() {

cantidad = $scope.items.trim();
if(cantidad.length===0){
  $scope.message = "Please enter data first";
  $scope.obj = {
    "color" : "red"
  }
}else{
  cantidad = $scope.items.split(',').length;
  if(cantidad>=1&&cantidad<=3){
    $scope.message = "Enjoy!";
    $scope.obj = {
      "color" : "green"
    }
  }else{
    $scope.message = "Too much!";
    $scope.obj = {
      "color" : "green"
    }
  }
}
}

}

})();
