angular.module('Home')

.controller(
		'HomeController',

		function($scope, $http, $location, $rootScope) {
			$http.get('matchingSourceLov').success(function(data) {
				$scope.matchingSourceLovs = data;
			})
      
			$scope.rangeLov = [ {
				'value' : '-3','name' : 'Scan Records Created in last 3 Months'
			}, {
				'value' : '-6',	'name' : 'Scan Records Created in last 6 Months'
			}, {
				'value' : '-9','name' : 'Scan Records Created in last 9 Months'
			}, {
				'value' : '-12','name' : 'Scan Records Created in last 1 Year'
			} ,
			{
				'value' : '-24','name' : 'Scan Records Created in last 2 Years'
			} ,
			{
				'value' : '-36','name' : 'Scan Records Created in last 3 Years'
			},
			{
				'value' : '-600','name' : 'Scan All Person Records'
			}
			];

			var authenticate = function(callback) {

				$http.get('user').success(function(data) {
					if (data.name) {
						$rootScope.authenticated = true;
						$rootScope.user = data;
					} else {
						$rootScope.authenticated = false;
						$rootScope.user = null;
					}
					callback && callback();
				}).error(function() {
					$rootScope.authenticated = false;
					$rootScope.user = null;
					callback && callback();
				});

			}

			authenticate();

			$scope.logout = function() {
				$http.post('logout', {}).success(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				}).error(function(data) {
					console.log("Logout failed")
					$rootScope.authenticated = false;
				});
			}

			$scope.scanRecords = function() {
				thisme = this;
				//thisme.getSelectedColumns();
				alert("in scanRecords" + $scope.range + " " + $scope.matchingSrc);
				$http.post('scanRecords', $.param({matchingSrc:$scope.matchingSrc, range:$scope.range}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					
					alert("in SelectedColumns" + thisme);
					thisme.getSelectedColumns();
					
				}).error(function(data) {
					alert("in error");
				})
			}
			
			$scope.getSelectedColumns = function(){
				
				alert("in SelectedColumns");
				$http.get("selectedColumns").success(function(data) {
					$http.get("getDuplicateRecords") .success(function(data) {
						$scope.relimData = data;
					}).error(function(data) {
						alert("in error getDuplicateRecords");
					})
					
				}).error(function(data) {
					alert("in error");
				})
			}

			$scope.isUserAdmin = function() {
				console.log("$rootScope.user.authorities "
						+ $rootScope.user.authorities);
				return $rootScope.user.authorities.contains('ROLE_ADMIN');
			}
			
			$scope.deactivateRec = function(relim) {
				$http.post('deactivateRec', $.param({pidm:relim.gzrelim_pidm}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					
					console.log("deactivated");
					
				}).error(function(data) {
					alert("in error");
				})
			}
			
			$scope.deleteRec = function(relim) {
				$http.post('deleteRec', $.param({pidm:relim.gzrelim_pidm, matchGroup:relim.gzrelim_match_group}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					
					console.log("deleted");
					
				}).error(function(data) {
					alert("in error");
				})
			}
			
			
			$scope.merge = function(){
				console.log($scope.selected);
				  alert(JSON.stringify($scope.selected));
			}
		});