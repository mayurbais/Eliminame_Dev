var app = angular.module("MyApp", ["LiveSearch"]);
app.controller("MyController", function($scope, $http, $q, $window) {
    
    $scope.mySearch = "";
    
    $scope.mySearchCallback = function(params) {
      var defer = $q.defer();

      $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&q=" + params.query)
      .success(function(response) {
        defer.resolve(response);
      });
        
      return defer.promise;
    };
});

function callback(response, status) {
  console.log(status);
};
