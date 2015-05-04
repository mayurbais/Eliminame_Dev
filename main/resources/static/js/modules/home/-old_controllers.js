angular.module('Home')

.controller(
		'HomeController',
		function($scope, $http, $location, $rootScope) {
			   var checkboxCellTemplate="<div class='ngSelectionCell'><input tabindex='-1' class='ngSelectionCheckbox' type='checkbox' ng-checked='cbVal(row.entity)' /></div>";  // wrks best 
			   var actionColTemplate = "<div class='ngCellText' ng-class='col.colIndex()'>"+
										"<button type='button' title='deactivate' ng-click='deactivateRec(row.entity)' class='btn btn-info btn-xs'><i class='fa fa-archive'></i></button>"+
										"<button type='button' title='delete' ng-click='launch('confirm')' class='btn btn-info btn-xs'><i class='fa fa-trash-o'></i></button></div>";
					$scope.gridOptions = {
						data: 'relimData',
						enablePinning: true,
						enableSorting: true,
						showGroupPanel: true,
						enableRowSelection: false,
						showColumnMenu: true,
						groupsCollapsedByDefault:false,
						groups:['gzrelim_match_group'],
						enableHighlighting:true,
						selectWithCheckboxOnly:true,
						showGroupPanel:true,
						 showSelectionCheckbox: true,
						columnDefs: [
									{ field: "gzrelim_match_group", displayName: 'Match Group', toolTip:'Match Group', width: 80, pinned: true,  tooltip:"Match Group" , groupFixed:false},
									{ field: "gzrelim_pidm", displayName: 'PIMD', width: 70 ,pinned: true },
									{ field: "gzrelim_last_name", displayName: 'Last name', width: 90 , pinned: true },
									{ field: "gzrelim_first_name", displayName: 'First name',  width: 120  },
									{ field: "gzrelim_mi", displayName: 'Middle name',  width: 120  },
									{ field: "gzrelim_street_line1", displayName: 'Street line 1',  width: 120  },
									{ field: "gzrelim_street_line2", displayName: 'Steer line 2',  width: 120  },
									{ field: "gzrelim_city", displayName: 'City',  width: 120  },
									{ field: "actions", displayName: 'Actions',  width: 100 , cellTemplate:actionColTemplate }
									]
				}
				
			
			
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
				alert("deleted");
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
			
			$scope.launch = function(){
//				var dlg = dialogs.confirm();
//				dlg.result.then(function(btn){
//					deleteRec(null);
//					$scope.deleteConfirmed = true;
//				},function(btn){
//					$scope.deleteConfirmed = false;
//				});
			}
		});