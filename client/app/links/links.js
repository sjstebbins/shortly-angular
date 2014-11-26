angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.links = Links.links;

  $scope.getLinks = function(){
    Links.getAll()
      .then(function(links){
        $scope.data.links = links;
      })
      .catch(function(error){
        console.log(error);
      });
  };


  $scope.getLinks();
  $scope.name = "LinksController";


});
