angular.module('UserPreference',["LiveSearch"])
.controller('UserPrefController',	function($scope, $http, $location, $q,  $rootScope, $window) {
		 $scope.panes = [
			{ title:"Exception Table",      content:"home.html" , active: true},
			{ title:"Selected Columns",  content:"settings.html"},
			{ title:"Range",      content:"view.html"}
		];
  
			
			$scope.tabs = [
			{
				name: 'exceptionTable',
				title : 'Exception Table',
				url: 'js/modules/userpref/views/ExceptionTable.html' ,
				active1: true
			},{
				name: 'selectedColumns',
				title :'Selected Columns',
				url: 'tabs-data/backbone.html',
				active1: false
			},{
				name: 'range',
				title : 'Range',
				url: 'tabs-data/knockout.html',
				active1: false
			}
			];
			
			
			$scope.tabSrc = "http://lorempixel.com/400/400/cats/1"; /*default tab*/
			$scope.current = 'exceptionTable'; /*default active tab*/
			
			$scope.toggleTab = function(s){
				$scope.tabSrc = s.url;  /*tab changed*/
				$scope.current = s.name; /* changing value of current*/
				
			};
			//return $rootScope.user.authorities.contains('ROLE_ADMIN');
			
	});