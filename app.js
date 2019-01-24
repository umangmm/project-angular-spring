var myApp = angular.module("myApp",[]);
myApp.controller("ContactController", ['$scope',function($scope){
  $scope.master = {};

   $scope.saveContact = function (newcontact) {
    /*if(newcontact.name ==null ||newcontact.email ==null || newcontact.password =null ||newcontact.phone ==null ){
      $scope.errors="Field is Empty";
    }
   else{}*/
$scope.master = angular.copy(newcontact);
    
    };
       
}]);