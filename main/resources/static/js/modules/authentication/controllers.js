angular.module('Authentication')
 
.controller('LoginController',
    function ($scope, $rootScope, $location,  $http, $route) {
        
	// $scope.tab = function(route) {
		// return $route.current && route === $route.current.controller;
	// };



	// reset login status
	$scope.credentials = {};
 
	$scope.login = function() {
		$http.post('login', $.param($scope.credentials), {
			headers : {
				"content-type" : "application/x-www-form-urlencoded"
			}
		}).success(function(data) {
				//if ($rootScope.authenticated) {
					$location.path("/home");
					$scope.error = false;
					$rootScope.authenticated = true;
//				} else {
//					console.log("Login failed with redirect")
//					$location.path("/login");
//					$scope.error = true;
//					$rootScope.authenticated = false;
//				}
		
		}).error(function(data) {
			console.log("Login failed" + data)
			$location.path("/login");
			$scope.error = true;
			$rootScope.authenticated = false;
			$scope.errorMessage = data.message;
		})
	}
    });