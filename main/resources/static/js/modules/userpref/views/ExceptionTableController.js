angular.module('ExceptionTableController',["LiveSearch"])

.controller(
		'ExceptionTableController',
		function($scope, $http, $location, $q,  $rootScope, $window) {
			$scope.mySearch = "mayur";
			
			$http.get("getExceptionTablelist").success(function(data) {
				$scope.exceptionTablelist = data;
				
			}).error(function(data) {
				alert("in error");
			})
			
		    $scope.mySearchCallback = function(params) {
			      var defer = $q.defer();

			      $http.post("getAllTablelist",$.param({srchString:params.query}), {
						headers : {
							"content-type" : "application/x-www-form-urlencoded"
						}
					})
			      .success(function(response) {
			        defer.resolve(response);
			      });
			        
			      return defer.promise;
			};
			
			$scope.addToExceptionList=function(){
				
				if($scope.isUserAdmin()==false){
					alert("Only Admin can add table to exception list");
				}else{
					alert(jQuery('#search1').val());
				 $http.post("addToExceptionList",$.param({tableName: jQuery('#search1').val()}), {
						headers : {
							"content-type" : "application/x-www-form-urlencoded"
						}
					})
			      .success(function(response) {
			    	  $location.path("/");
			      });
				}
			}
			
			$scope.isUserAdmin = function() {
				console.log("$rootScope.user.authorities "			+ $rootScope.user.authorities);
				var authoritiesarr=$rootScope.user.authorities;
				for(var i=0;i<authoritiesarr.length;i++){
					if(authoritiesarr[i].authority=="ROLE_ADMIN"){
						return true;
					}
				}
				return false;
		
		})