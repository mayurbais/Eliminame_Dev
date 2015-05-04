angular.module('Home')

.controller(
		'HomeController',
		function($scope, $http, $location, $rootScope, dialogs) {
				$rootScope.addmergeWindow = false;
			   var checkboxCellTemplate="<div class='ngSelectionCell'><input tabindex='-1' class='ngSelectionCheckbox' type='checkbox' ng-checked='cbVal(row.entity)' /></div>";  // wrks best 
			   var actionColTemplate = "<div class='ngCellText' ng-class='col.colIndex()'>"+
										"<button type='button' title='deactivate' ng-click='deactivateRec(row)' class='btn btn-info btn-xs'><i class='fa fa-archive'></i></button>"+
										"<button type='button' title='delete' ng-click='launch(\"confirm\")' class='btn btn-info btn-xs'><i class='fa fa-trash-o'></i></button>"+
										"<button type='button' title='info' ng-click='info(row.entity)' class='btn btn-info btn-xs'><i class='fa fa-info-circle'></i></button></div>";
;
					$scope.gridOptions = {
						data: 'relimData',
						enablePinning: true,
						enableSorting: true,
						showGroupPanel: true,
						showColumnMenu: true,
						groupsCollapsedByDefault:false,
						groups:['gzrelim_match_group'],
						enableHighlighting:true,
						showGroupPanel:true,
						showSelectionCheckbox: true,
						selectWithCheckboxOnly:true,
						selectedItems: [],
						merge:  function (row) {
							var count=0;
							
							 if (this.children.length > 0) {
								selectedPidm = [];
								//this.entity.gLabel = 
								angular.forEach(this.children, function (a) {
										if(a.selected == true) {
											count++
											selectedPidm.push(a.entity.gzrelim_pidm);
										}
										console.log(a); 
								  });
							}
							if(count == 2){
								$rootScope.selectedPIDM1 = selectedPidm[0];
								$rootScope.selectedPIDM2 = selectedPidm[1];
								//$location.path("/merge");
								$rootScope.addmergeWindow = true;
							}
						
						},
						columnDefs: [
									{ field: "gzrelim_match_group", displayName: 'Match Group', toolTip:'Match Group', width: 80, pinned: true,  tooltip:"Match Group" , groupFixed:false},
									{ field: "gzrelim_pidm", displayName: 'PIMD', width: 70 ,pinned: true },
									{ field: "gzrelim_last_name", displayName: 'Last name', width: 90 , pinned: true },
									{ field: "gzrelim_first_name", displayName: 'First name',  width: 120  },
									{ field: "gzrelim_birth_date", displayName: 'Birth Date',  width: 120  },
									{ field: "gzrelim_email_address", displayName: 'Email',  width: 140  },
									{ field: "actions", displayName: 'Actions',  width: 80 , cellTemplate:actionColTemplate}
									]
				}
				
			
			//$scope.matchingSourceLovs = [{"name":"On Line Matching","value":"WEB"},{"name":"Financial Aid Data Load Step 2","value":"FA DATALOAD STEP2"},{"name":"On Line Matching for CE","value":"CE_WEB"},{"name":"Eliminame Common Matching Source","value":"ELIMINAME"},{"name":"Non Person Matching Source","value":"NONPERSON"}];
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
				//$scope.relimData  = [{"gzrelim_id":"@00845143","gzrelim_mark_dup":null,"gzrelim_match_group":0,"gzrelim_pidm":1341053,"gzrelim_last_name":"Student","gzrelim_entity_cde":"P","gzrelim_first_name":"taundyzpy","gzrelim_mi":"A","gzrelim_street_line1":"Street 1","gzrelim_street_line2":"Street 2","gzrelim_street_line3":null,"gzrelim_street_line4":null,"gzrelim_city":"City2","gzrelim_stat_code":null,"gzrelim_zip":null,"gzrelim_natn_code":"157","gzrelim_cnty_code":null,"gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":"embxzma","gzrelim_birth_date":null,"gzrelim_sex":"M","gzrelim_email_address":null,"gzrelim_atyp_code":"MA","gzrelim_tele_code":null,"gzrelim_emal_code":null,"gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":3,"gzrelim_birth_day":"01","gzrelim_birth_month":"12","gzrelim_birth_year":"1981"},{"gzrelim_id":"@00845142","gzrelim_mark_dup":null,"gzrelim_match_group":0,"gzrelim_pidm":1341055,"gzrelim_last_name":"Student","gzrelim_entity_cde":"P","gzrelim_first_name":"enuacijrz","gzrelim_mi":"B","gzrelim_street_line1":"Street Line 1","gzrelim_street_line2":"Street Line 2","gzrelim_street_line3":"Street Line 3","gzrelim_street_line4":null,"gzrelim_city":"Portsmouth","gzrelim_stat_code":"NH","gzrelim_zip":"00210","gzrelim_natn_code":null,"gzrelim_cnty_code":"33015","gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":"kcbwqje","gzrelim_birth_date":null,"gzrelim_sex":"M","gzrelim_email_address":null,"gzrelim_atyp_code":"MA","gzrelim_tele_code":null,"gzrelim_emal_code":null,"gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":1,"gzrelim_birth_day":"20","gzrelim_birth_month":"12","gzrelim_birth_year":"2001"},{"gzrelim_id":"@00845159","gzrelim_mark_dup":null,"gzrelim_match_group":5,"gzrelim_pidm":1341070,"gzrelim_last_name":"Bennett","gzrelim_entity_cde":"P","gzrelim_first_name":"skxxernv","gzrelim_mi":null,"gzrelim_street_line1":"tower B","gzrelim_street_line2":"Lane 5C","gzrelim_street_line3":"Street 3","gzrelim_street_line4":null,"gzrelim_city":"Barceloneta","gzrelim_stat_code":"PR","gzrelim_zip":"00617","gzrelim_natn_code":null,"gzrelim_cnty_code":"72017","gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":"768489076","gzrelim_birth_date":null,"gzrelim_sex":"F","gzrelim_email_address":"victoria1234@gmail.com","gzrelim_atyp_code":"CS","gzrelim_tele_code":null,"gzrelim_emal_code":"EM","gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":3,"gzrelim_birth_day":"23","gzrelim_birth_month":"01","gzrelim_birth_year":"1981"},{"gzrelim_id":"@00845158","gzrelim_mark_dup":null,"gzrelim_match_group":5,"gzrelim_pidm":1341069,"gzrelim_last_name":"bennett","gzrelim_entity_cde":"P","gzrelim_first_name":"dxffhidd","gzrelim_mi":null,"gzrelim_street_line1":"ggs street 2","gzrelim_street_line2":"toll 3","gzrelim_street_line3":null,"gzrelim_street_line4":null,"gzrelim_city":"Aguada","gzrelim_stat_code":"PR","gzrelim_zip":"00602","gzrelim_natn_code":null,"gzrelim_cnty_code":"72003","gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":"768489076","gzrelim_birth_date":null,"gzrelim_sex":"F","gzrelim_email_address":"victoria1234@gmail.com","gzrelim_atyp_code":"CB","gzrelim_tele_code":null,"gzrelim_emal_code":"EM","gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":1,"gzrelim_birth_day":"08","gzrelim_birth_month":"05","gzrelim_birth_year":"2002"},{"gzrelim_id":"@00845162","gzrelim_mark_dup":null,"gzrelim_match_group":10,"gzrelim_pidm":1341073,"gzrelim_last_name":"Morris","gzrelim_entity_cde":"P","gzrelim_first_name":"wut","gzrelim_mi":"H","gzrelim_street_line1":"JGG Appartments","gzrelim_street_line2":"Park Lane","gzrelim_street_line3":null,"gzrelim_street_line4":null,"gzrelim_city":"Holtsville","gzrelim_stat_code":"NY","gzrelim_zip":"00544","gzrelim_natn_code":null,"gzrelim_cnty_code":"36103","gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":"62739300","gzrelim_birth_date":null,"gzrelim_sex":"M","gzrelim_email_address":"geo12morris@gmail.com","gzrelim_atyp_code":"BU","gzrelim_tele_code":null,"gzrelim_emal_code":"EM","gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":3,"gzrelim_birth_day":"02","gzrelim_birth_month":"02","gzrelim_birth_year":"2002"},{"gzrelim_id":"@00845163","gzrelim_mark_dup":null,"gzrelim_match_group":10,"gzrelim_pidm":1341074,"gzrelim_last_name":"Morris","gzrelim_entity_cde":"P","gzrelim_first_name":"jmq","gzrelim_mi":"H","gzrelim_street_line1":"ksh street 2","gzrelim_street_line2":"james park","gzrelim_street_line3":null,"gzrelim_street_line4":null,"gzrelim_city":"San German","gzrelim_stat_code":"PR","gzrelim_zip":"00683","gzrelim_natn_code":null,"gzrelim_cnty_code":"72125","gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":"726283902","gzrelim_birth_date":null,"gzrelim_sex":"M","gzrelim_email_address":"geo12morris@gmail.com","gzrelim_atyp_code":"CS","gzrelim_tele_code":null,"gzrelim_emal_code":"EM","gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":1,"gzrelim_birth_day":"02","gzrelim_birth_month":"02","gzrelim_birth_year":"2002"},{"gzrelim_id":"@00845170","gzrelim_mark_dup":null,"gzrelim_match_group":14,"gzrelim_pidm":1341081,"gzrelim_last_name":"Jones","gzrelim_entity_cde":"P","gzrelim_first_name":"ooqs","gzrelim_mi":null,"gzrelim_street_line1":"city park road","gzrelim_street_line2":"lane 4","gzrelim_street_line3":null,"gzrelim_street_line4":null,"gzrelim_city":"Holtsville","gzrelim_stat_code":"NY","gzrelim_zip":"00544","gzrelim_natn_code":null,"gzrelim_cnty_code":"36103","gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":null,"gzrelim_birth_date":null,"gzrelim_sex":"F","gzrelim_email_address":null,"gzrelim_atyp_code":"CS","gzrelim_tele_code":null,"gzrelim_emal_code":null,"gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":3,"gzrelim_birth_day":"09","gzrelim_birth_month":"05","gzrelim_birth_year":"2001"},{"gzrelim_id":"@00845171","gzrelim_mark_dup":null,"gzrelim_match_group":14,"gzrelim_pidm":1341082,"gzrelim_last_name":"Jones","gzrelim_entity_cde":"P","gzrelim_first_name":"leti","gzrelim_mi":"Ria","gzrelim_street_line1":null,"gzrelim_street_line2":null,"gzrelim_street_line3":null,"gzrelim_street_line4":null,"gzrelim_city":null,"gzrelim_stat_code":null,"gzrelim_zip":null,"gzrelim_natn_code":null,"gzrelim_cnty_code":null,"gzrelim_phone_area":null,"gzrelim_phone_number":null,"gzrelim_phone_ext":null,"gzrelim_ssn":null,"gzrelim_birth_date":null,"gzrelim_sex":"F","gzrelim_email_address":null,"gzrelim_atyp_code":null,"gzrelim_tele_code":null,"gzrelim_emal_code":null,"gzrelim_asrc_code":null,"gzrelim_ctry_code_phone":null,"gzrelim_house_number":null,"gzrelim_surname_prefix":null,"gzrelim_delete_ind":null,"gzrelim_accuracy":1,"gzrelim_birth_day":"08","gzrelim_birth_month":"03","gzrelim_birth_year":"2001"}];
				//thisme.getSelectedColumns();
				//alert("in scanRecords" + $scope.range + " " + $scope.matchingSrc);
				var dlg = dialogs.spin('Pls Wait!',' Scanning...',0,{size:'sm',isLoadSuccess : "Scaned successfully!",		isLoadFail : "Failed to Scan" });
						
						
				$http.post('scanRecords', $.param({matchingSrc:$scope.matchingSrc, range:$scope.range}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					
					$rootScope.$broadcast('dialogs.wait.completeSucess');
					thisme.getSelectedColumns();
					
				}).error(function(data) {
					$rootScope.$broadcast('dialogs.wait.completeError');
				})
			}
			
			$scope.getSelectedColumns = function(){
				
				//alert("in SelectedColumns");
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
			
			$scope.info = function(relim){
				$scope.selectedRecord = relim;
				$http.post('getActivatedModule', $.param({pidm:relim.gzrelim_pidm}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					$scope.activateModules = data;
					$rootScope.$broadcast('dialogs.wait.completeSucess');
					
				}).error(function(data) {
					$rootScope.$broadcast('dialogs.wait.completeError');
				})
				
			}
			
			$scope.deactivateRec = function(relim) {
				 thisme = this;
				 var indx = $scope.relimData.indexOf(relim.entity);
				 var dlg = dialogs.confirm("Confirm","Are you sure, you want to deactivate this record? " + indx,{size:'sm',windowClass: 'my-modal-dialog'});
				 dlg.result.then(function(btn){
					
					$scope.relimData.splice(indx, 1);
					var dlg = dialogs.spin('Pls Wait!',' Deactivating...',0,{size:'sm',isLoadSuccess : "Deactivated successfully!",		isLoadFail : "Failed to Deactivated" });
					$http.post('deactivateRec', $.param({pidm:relim.entity.gzrelim_pidm}), {
						headers : {
							"content-type" : "application/x-www-form-urlencoded"
						}
					}).success(function(data) {
						console.log("deactivated");
						$rootScope.$broadcast('dialogs.wait.completeSucess');
					}).error(function(data) {
						//alert("deactivate in error");
						$rootScope.$broadcast('dialogs.wait.completeError');
					})
				},function(btn){
					$scope.deactivateConfirmed = false;
				});  
			
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
			
			
			$scope.getClass = function(val){

				if(val==true){
					return "icheckbox_minimal-blue checked";
				}else{
					return "icheckbox_minimal-blue";
				}
			}
			
			$scope.launch = function(){
				 thisme = this;
				 var dlg = dialogs.confirm("Confirm","Are you sure, you want to delete this record",{size:'sm',windowClass: 'my-modal-dialog'});
				dlg.result.then(function(btn){
					thisme.deleteRec(null);
					$scope.deleteConfirmed = true;
				},function(btn){
					$scope.deleteConfirmed = false;
				});  
			}
		}); 