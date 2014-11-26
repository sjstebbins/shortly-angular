angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(){

    Links.addLink($scope.link)
      .then(function(){
        $location.path('/links');
      })
      .catch(function(error){
        console.log(error);
      });


    // var url = $scope.link.url;
    // var shortenedURL = url.replace(/.*?:\/\//g, "");
    // $scope.links.links[shortenedURL] = {origURL: url, shortURL: shortenedURL, clicks: 0};
    // $scope.last = shortenedURL;
  };

});


