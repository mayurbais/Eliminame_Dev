angular.module('Merge',[])

.controller(
		'MergeController',

		function($scope, $http, $location, $q,  $rootScope, $window) {
			
			var selectedPidmRec1=[];
			var selectedPidmRec2=[];
			
			var actionColTemplateLeft = "<div class='ngCellText' ng-class='col.colIndex()'>"+
										"<button type='button' title='reset' ng-click='resetLeft(row,$event)' class='btn btn-info btn-xs'><i class='fa fa-undo'></i></button>"+
										"</div>";
			var headerTemplateLeft = "<div><button type='button' title='reset' ng-click='resetAllLeft(row)' class='btn btn-info btn-xs'><i class='fa fa-undo'></i></button></div>";
			
			var checkboxHeaderTemplate1= "<input class='ngSelectionHeader' type='checkbox' ng-show='multiSelect' ng-model='allSelected1' ng-change='selectAll1(allSelected1)'/>";
			
			var checkboxHeaderTemplate2= "<input class='ngSelectionHeader' type='checkbox' ng-show='multiSelect' ng-model='allSelected2' ng-change='selectAll2(allSelected2)'/>";
			
			var actionColTemplateRight = "<div class='ngCellText' ng-class='col.colIndex()'>"+
										"<button type='button' title='reset' ng-click='resetRight(row,$event)' class='btn btn-info btn-xs'><i class='fa fa-undo'></i></button>"+
										"</div>";
			var headerTemplateRight= "<div><button type='button' title='reset' ng-click='resetAllRight(row)' class='btn btn-info btn-xs'><i class='fa fa-undo'></i></button></div>";
			
			var checkboxCellTemplate= '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"  ng-disabled="isDisabled(row)"></div>';  
			
			$scope.gridOptionsPidm1 = {
						data : 'columnsRecord1',
						showSelectionCheckbox: true,
						checkboxCellTemplate: checkboxCellTemplate,
						checkboxHeaderTemplate: checkboxHeaderTemplate1,
						selectedItems : selectedPidmRec1,
						afterSelectionChange: function (row, event) {
							console.log("deal with row " + row.rowIndex);
							if(row.entity.colname == 'SPBPERS_PIDM' || row.entity.colname == 'SPBPERS_ACTIVITY_DATE' 
									|| row.entity.colname == 'SPBPERS_DATA_ORIGIN' || row.entity.colname == 'SPBPERS_USER_ID'){
								$scope.gridOptionsPidm1.selectItem(row.rowIndex, false);
								row.selected = false;
							}
						},
						columnDefs: [{ field: "colname", displayName: 'Column Name', width: 180},
									{ field: "colval", displayName: 'Column Value', width: 180 },
									{ field: "R", displayName: 'R', width: 40 ,cellTemplate:actionColTemplateLeft, headerCellTemplate:headerTemplateLeft}
									]
			}
			
			//selectedItems: selectedcolPidm1,
			$scope.gridOptionsPidm2 = {
						data :'columnsRecord2',
						showSelectionCheckbox: true,
						checkboxCellTemplate: checkboxCellTemplate,
						checkboxHeaderTemplate: checkboxHeaderTemplate2,
						selectedItems : selectedPidmRec2,
						afterSelectionChange: function (row, event) {
							console.log("deal with row " + row.rowIndex);
							if(row.entity.colname == 'SPBPERS_PIDM' || row.entity.colname == 'SPBPERS_ACTIVITY_DATE' 
									|| row.entity.colname == 'SPBPERS_DATA_ORIGIN' || row.entity.colname == 'SPBPERS_USER_ID'){
								$scope.gridOptionsPidm2.selectItem(row.rowIndex, false);
								row.selected = false;
							}
						},
						columnDefs: [{ field: "colname", displayName: 'Column Name', width: 180},
									{ field: "colval", displayName: 'Column Value', width: 180 },
									{ field: "R", displayName: 'R', width: 40 ,cellTemplate:actionColTemplateRight, headerCellTemplate:headerTemplateRight}
									]
			}
			
			$scope.isDisabled = function(row){
				if(row.entity.colname == 'SPBPERS_PIDM' || row.entity.colname == 'SPBPERS_ACTIVITY_DATE' 
					|| row.entity.colname == 'SPBPERS_DATA_ORIGIN' || row.entity.colname == 'SPBPERS_USER_ID'){
							return true;
				}
			}
			
			
			//selectedItems: selectedcolPidm2,
			//$scope.pidmTables = [{"gzrimrg_table_name":"GOREMAL"},{"gzrimrg_table_name":"SPBPERS"},{"gzrimrg_table_name":"SPRADDR"},{"gzrimrg_table_name":"SPRIDEN"}];
			$http.get('getGzrimrgTables').success(function(data) {
				$scope.pidmTables = data;
			});
			
			 $scope.selectAll1 = function(selectAll) {
				    angular.forEach($scope.columnsRecord1, function(data, index){
						//alert("sdfdsf" + this[0]);
						if(data.colname != 'SPBPERS_PIDM' && data.colname != 'SPBPERS_ACTIVITY_DATE' && data.colname != 'SPBPERS_DATA_ORIGIN' && data.colname != 'SPBPERS_USER_ID'){
							$scope.gridOptionsPidm1.selectItem(index, selectAll);
						}
				    });
			};
			
			$scope.selectAll2 = function(selectAll) {
			    angular.forEach($scope.columnsRecord2, function(data, index){
						//alert("sdfdsf" + this[0]);
						if(data.colname != 'SPBPERS_PIDM' && data.colname != 'SPBPERS_ACTIVITY_DATE' && data.colname != 'SPBPERS_DATA_ORIGIN' && data.colname != 'SPBPERS_USER_ID'){
							$scope.gridOptionsPidm2.selectItem(index, selectAll);
						}
				});
			};
			
			$scope.mergeLeftToright = function(){
				//alert(selectedPidmRec1);
				for(var j=0;j<$scope.columnsRecord2.length;j++){
					for(var i=0;i<selectedPidmRec1.length;i++){
						if($scope.columnsRecord2[j].colname == selectedPidmRec1[i].colname){
							$scope.columnsRecord2[j].colval = selectedPidmRec1[i].colval;
						}
						
					}
				}
			}   
			
			$scope.allToLeft = function(){
				for(var j=0;j<$scope.columnsRecord2.length;j++){
					if($scope.columnsRecord1[j].colname != 'SPBPERS_PIDM' && $scope.columnsRecord1[j].colname != 'SPBPERS_ACTIVITY_DATE' && 
					 $scope.columnsRecord1[j].colname != 'SPBPERS_DATA_ORIGIN' && data.colname != 'SPBPERS_USER_ID'){
						$scope.columnsRecord2[j].colval = $scope.columnsRecord1[j].colval;
					}
				}
			} 
			
			$scope.allToRight = function(){
				for(var j=0;j<$scope.columnsRecord1.length;j++){
					if($scope.columnsRecord1[j].colname != 'SPBPERS_PIDM' && $scope.columnsRecord1[j].colname != 'SPBPERS_ACTIVITY_DATE' && 
						$scope.columnsRecord1[j].colname != 'SPBPERS_DATA_ORIGIN' && data.colname != 'SPBPERS_USER_ID'){
							$scope.columnsRecord1[j].colval = $scope.columnsRecord2[j].colval;
					}
					
				}
			} 
			
			$scope.mergeRightToLeft = function(){
				for(var j=0;j<$scope.columnsRecord1.length;j++){
					for(var i=0;i<selectedPidmRec2.length;i++){
						if($scope.columnsRecord1[j].colname == selectedPidmRec2[i].colname){
							$scope.columnsRecord1[j].colval = selectedPidmRec2[i].colval;
						}
						
					}
				}
			} 
			
			$scope.resetAllLeft = function(){
				for(var j=0;j<$scope.columnsRecord1.length;j++){
					$scope.columnsRecord1[j].colval = $scope.origcolumnsRecord1[j].colval;
				}
			}
			
			$scope.resetLeft = function(row,event){
				event.stopPropagation();
				$scope.columnsRecord1[row.rowIndex].colval =  $scope.origcolumnsRecord1[row.rowIndex].colval;
			}
			
			$scope.resetAllRight = function(){
				for(var j=0;j<$scope.columnsRecord2.length;j++){
					$scope.columnsRecord2[j].colval = $scope.origcolumnsRecord2[j].colval;
				}
			}
			
			$scope.resetRight = function(row,event){
				event.stopPropagation(); 
				$scope.columnsRecord2[row.rowIndex].colval =  $scope.origcolumnsRecord2[row.rowIndex].colval;
			}
			
			$scope.getRecords = function(){
				$scope.columnsRecord2 = [];
				$scope.columnsRecord1 = [];
				$scope.record2List = [];
				$scope.record1List = [];
				$http.post('getRecordList', $.param({pidm:$rootScope.selectedPIDM1, tableName:$scope.SelectedpidmTablename}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					$scope.record1List = data;
				})
				
				//$scope.record1List = [{"name":"1","value":"AAANWtAANAAAVX9AAc"}];
				//$scope.record2List = [{"name":"1","value":"AAANWtAANAAAVX9AAW"}];
				
				$http.post('getRecordList', $.param({pidm:$rootScope.selectedPIDM2, tableName:$scope.SelectedpidmTablename}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					$scope.record2List = data;
					
				})
				
			} 
			$scope.getColumnValuesForRec1 = function(){
				//$scope.columnsRecord1 = [{"colname":"SPBPERS_PIDM","colval":"1341070"},{"colname":"SPBPERS_SSN","colval":"768489076"},{"colname":"SPBPERS_BIRTH_DATE","colval":"1981-01-23 00:00:00.0"},{"colname":"SPBPERS_LGCY_CODE","colval":"null"},{"colname":"SPBPERS_ETHN_CODE","colval":"null"},{"colname":"SPBPERS_MRTL_CODE","colval":"null"},{"colname":"SPBPERS_RELG_CODE","colval":"null"},{"colname":"SPBPERS_SEX","colval":"F"},{"colname":"SPBPERS_CONFID_IND","colval":"N"},{"colname":"SPBPERS_DEAD_IND","colval":"null"},{"colname":"SPBPERS_VETC_FILE_NUMBER","colval":"null"},{"colname":"SPBPERS_LEGAL_NAME","colval":"null"},{"colname":"SPBPERS_PREF_FIRST_NAME","colval":"null"},{"colname":"SPBPERS_NAME_PREFIX","colval":"null"},{"colname":"SPBPERS_NAME_SUFFIX","colval":"null"},{"colname":"SPBPERS_ACTIVITY_DATE","colval":"2014-01-23 13:14:05.0"},{"colname":"SPBPERS_VERA_IND","colval":"null"},{"colname":"SPBPERS_CITZ_IND","colval":"null"},{"colname":"SPBPERS_DEAD_DATE","colval":"null"},{"colname":"SPBPERS_PIN","colval":"null"},{"colname":"SPBPERS_CITZ_CODE","colval":"null"},{"colname":"SPBPERS_HAIR_CODE","colval":"null"},{"colname":"SPBPERS_EYES_CODE","colval":"null"},{"colname":"SPBPERS_CITY_BIRTH","colval":"null"},{"colname":"SPBPERS_STAT_CODE_BIRTH","colval":"null"},{"colname":"SPBPERS_DRIVER_LICENSE","colval":"null"},{"colname":"SPBPERS_STAT_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_NATN_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_HEIGHT","colval":"null"},{"colname":"SPBPERS_HEIGHT","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_WEIGHT","colval":"null"},{"colname":"SPBPERS_WEIGHT","colval":"null"},{"colname":"SPBPERS_SDVET_IND","colval":"null"},{"colname":"SPBPERS_LICENSE_ISSUED_DATE","colval":"null"},{"colname":"SPBPERS_LICENSE_EXPIRES_DATE","colval":"null"},{"colname":"SPBPERS_INCAR_IND","colval":"null"},{"colname":"SPBPERS_WEBID","colval":"null"},{"colname":"SPBPERS_WEB_LAST_ACCESS","colval":"null"},{"colname":"SPBPERS_PIN_DISABLED_IND","colval":"null"},{"colname":"SPBPERS_ITIN","colval":"null"},{"colname":"SPBPERS_ACTIVE_DUTY_SEPR_DATE","colval":"null"},{"colname":"SPBPERS_DATA_ORIGIN","colval":"Banner"},{"colname":"SPBPERS_USER_ID","colval":"SAISUSR"},{"colname":"SPBPERS_ETHN_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_DATE","colval":"null"},{"colname":"SPBPERS_ARMED_SERV_MED_VET_IND","colval":"N"}];
				//$scope.origcolumnsRecord1 = [{"colname":"SPBPERS_PIDM","colval":"1341070"},{"colname":"SPBPERS_SSN","colval":"768489076"},{"colname":"SPBPERS_BIRTH_DATE","colval":"1981-01-23 00:00:00.0"},{"colname":"SPBPERS_LGCY_CODE","colval":"null"},{"colname":"SPBPERS_ETHN_CODE","colval":"null"},{"colname":"SPBPERS_MRTL_CODE","colval":"null"},{"colname":"SPBPERS_RELG_CODE","colval":"null"},{"colname":"SPBPERS_SEX","colval":"F"},{"colname":"SPBPERS_CONFID_IND","colval":"N"},{"colname":"SPBPERS_DEAD_IND","colval":"null"},{"colname":"SPBPERS_VETC_FILE_NUMBER","colval":"null"},{"colname":"SPBPERS_LEGAL_NAME","colval":"null"},{"colname":"SPBPERS_PREF_FIRST_NAME","colval":"null"},{"colname":"SPBPERS_NAME_PREFIX","colval":"null"},{"colname":"SPBPERS_NAME_SUFFIX","colval":"null"},{"colname":"SPBPERS_ACTIVITY_DATE","colval":"2014-01-23 13:14:05.0"},{"colname":"SPBPERS_VERA_IND","colval":"null"},{"colname":"SPBPERS_CITZ_IND","colval":"null"},{"colname":"SPBPERS_DEAD_DATE","colval":"null"},{"colname":"SPBPERS_PIN","colval":"null"},{"colname":"SPBPERS_CITZ_CODE","colval":"null"},{"colname":"SPBPERS_HAIR_CODE","colval":"null"},{"colname":"SPBPERS_EYES_CODE","colval":"null"},{"colname":"SPBPERS_CITY_BIRTH","colval":"null"},{"colname":"SPBPERS_STAT_CODE_BIRTH","colval":"null"},{"colname":"SPBPERS_DRIVER_LICENSE","colval":"null"},{"colname":"SPBPERS_STAT_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_NATN_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_HEIGHT","colval":"null"},{"colname":"SPBPERS_HEIGHT","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_WEIGHT","colval":"null"},{"colname":"SPBPERS_WEIGHT","colval":"null"},{"colname":"SPBPERS_SDVET_IND","colval":"null"},{"colname":"SPBPERS_LICENSE_ISSUED_DATE","colval":"null"},{"colname":"SPBPERS_LICENSE_EXPIRES_DATE","colval":"null"},{"colname":"SPBPERS_INCAR_IND","colval":"null"},{"colname":"SPBPERS_WEBID","colval":"null"},{"colname":"SPBPERS_WEB_LAST_ACCESS","colval":"null"},{"colname":"SPBPERS_PIN_DISABLED_IND","colval":"null"},{"colname":"SPBPERS_ITIN","colval":"null"},{"colname":"SPBPERS_ACTIVE_DUTY_SEPR_DATE","colval":"null"},{"colname":"SPBPERS_DATA_ORIGIN","colval":"Banner"},{"colname":"SPBPERS_USER_ID","colval":"SAISUSR"},{"colname":"SPBPERS_ETHN_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_DATE","colval":"null"},{"colname":"SPBPERS_ARMED_SERV_MED_VET_IND","colval":"N"}];
				$http.post('getColumnValuesForRec', $.param({rowid:$scope.record1, tableName:$scope.SelectedpidmTablename}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					$scope.columnsRecord1 = data;
					$scope.origcolumnsRecord1 = $.extend(true, $scope.origcolumnsRecord1, $scope.columnsRecord1);
					
				})
				
			}
			
			$scope.getColumnValuesForRec2 = function(){
				//$scope.columnsRecord2 = [{"colname":"SPBPERS_PIDM","colval":"1341069"},{"colname":"SPBPERS_SSN","colval":"768489076"},{"colname":"SPBPERS_BIRTH_DATE","colval":"2002-05-08 00:00:00.0"},{"colname":"SPBPERS_LGCY_CODE","colval":"null"},{"colname":"SPBPERS_ETHN_CODE","colval":"null"},{"colname":"SPBPERS_MRTL_CODE","colval":"null"},{"colname":"SPBPERS_RELG_CODE","colval":"null"},{"colname":"SPBPERS_SEX","colval":"F"},{"colname":"SPBPERS_CONFID_IND","colval":"N"},{"colname":"SPBPERS_DEAD_IND","colval":"null"},{"colname":"SPBPERS_VETC_FILE_NUMBER","colval":"null"},{"colname":"SPBPERS_LEGAL_NAME","colval":"null"},{"colname":"SPBPERS_PREF_FIRST_NAME","colval":"null"},{"colname":"SPBPERS_NAME_PREFIX","colval":"null"},{"colname":"SPBPERS_NAME_SUFFIX","colval":"null"},{"colname":"SPBPERS_ACTIVITY_DATE","colval":"2014-01-07 15:43:59.0"},{"colname":"SPBPERS_VERA_IND","colval":"null"},{"colname":"SPBPERS_CITZ_IND","colval":"null"},{"colname":"SPBPERS_DEAD_DATE","colval":"null"},{"colname":"SPBPERS_PIN","colval":"null"},{"colname":"SPBPERS_CITZ_CODE","colval":"null"},{"colname":"SPBPERS_HAIR_CODE","colval":"null"},{"colname":"SPBPERS_EYES_CODE","colval":"null"},{"colname":"SPBPERS_CITY_BIRTH","colval":"null"},{"colname":"SPBPERS_STAT_CODE_BIRTH","colval":"null"},{"colname":"SPBPERS_DRIVER_LICENSE","colval":"null"},{"colname":"SPBPERS_STAT_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_NATN_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_HEIGHT","colval":"null"},{"colname":"SPBPERS_HEIGHT","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_WEIGHT","colval":"null"},{"colname":"SPBPERS_WEIGHT","colval":"null"},{"colname":"SPBPERS_SDVET_IND","colval":"null"},{"colname":"SPBPERS_LICENSE_ISSUED_DATE","colval":"null"},{"colname":"SPBPERS_LICENSE_EXPIRES_DATE","colval":"null"},{"colname":"SPBPERS_INCAR_IND","colval":"null"},{"colname":"SPBPERS_WEBID","colval":"null"},{"colname":"SPBPERS_WEB_LAST_ACCESS","colval":"null"},{"colname":"SPBPERS_PIN_DISABLED_IND","colval":"null"},{"colname":"SPBPERS_ITIN","colval":"null"},{"colname":"SPBPERS_ACTIVE_DUTY_SEPR_DATE","colval":"null"},{"colname":"SPBPERS_DATA_ORIGIN","colval":"Banner"},{"colname":"SPBPERS_USER_ID","colval":"SAISUSR"},{"colname":"SPBPERS_ETHN_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_DATE","colval":"null"},{"colname":"SPBPERS_ARMED_SERV_MED_VET_IND","colval":"N"}];
				//$scope.origcolumnsRecord2  = [{"colname":"SPBPERS_PIDM","colval":"1341069"},{"colname":"SPBPERS_SSN","colval":"768489076"},{"colname":"SPBPERS_BIRTH_DATE","colval":"2002-05-08 00:00:00.0"},{"colname":"SPBPERS_LGCY_CODE","colval":"null"},{"colname":"SPBPERS_ETHN_CODE","colval":"null"},{"colname":"SPBPERS_MRTL_CODE","colval":"null"},{"colname":"SPBPERS_RELG_CODE","colval":"null"},{"colname":"SPBPERS_SEX","colval":"F"},{"colname":"SPBPERS_CONFID_IND","colval":"N"},{"colname":"SPBPERS_DEAD_IND","colval":"null"},{"colname":"SPBPERS_VETC_FILE_NUMBER","colval":"null"},{"colname":"SPBPERS_LEGAL_NAME","colval":"null"},{"colname":"SPBPERS_PREF_FIRST_NAME","colval":"null"},{"colname":"SPBPERS_NAME_PREFIX","colval":"null"},{"colname":"SPBPERS_NAME_SUFFIX","colval":"null"},{"colname":"SPBPERS_ACTIVITY_DATE","colval":"2014-01-07 15:43:59.0"},{"colname":"SPBPERS_VERA_IND","colval":"null"},{"colname":"SPBPERS_CITZ_IND","colval":"null"},{"colname":"SPBPERS_DEAD_DATE","colval":"null"},{"colname":"SPBPERS_PIN","colval":"null"},{"colname":"SPBPERS_CITZ_CODE","colval":"null"},{"colname":"SPBPERS_HAIR_CODE","colval":"null"},{"colname":"SPBPERS_EYES_CODE","colval":"null"},{"colname":"SPBPERS_CITY_BIRTH","colval":"null"},{"colname":"SPBPERS_STAT_CODE_BIRTH","colval":"null"},{"colname":"SPBPERS_DRIVER_LICENSE","colval":"null"},{"colname":"SPBPERS_STAT_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_NATN_CODE_DRIVER","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_HEIGHT","colval":"null"},{"colname":"SPBPERS_HEIGHT","colval":"null"},{"colname":"SPBPERS_UOMS_CODE_WEIGHT","colval":"null"},{"colname":"SPBPERS_WEIGHT","colval":"null"},{"colname":"SPBPERS_SDVET_IND","colval":"null"},{"colname":"SPBPERS_LICENSE_ISSUED_DATE","colval":"null"},{"colname":"SPBPERS_LICENSE_EXPIRES_DATE","colval":"null"},{"colname":"SPBPERS_INCAR_IND","colval":"null"},{"colname":"SPBPERS_WEBID","colval":"null"},{"colname":"SPBPERS_WEB_LAST_ACCESS","colval":"null"},{"colname":"SPBPERS_PIN_DISABLED_IND","colval":"null"},{"colname":"SPBPERS_ITIN","colval":"null"},{"colname":"SPBPERS_ACTIVE_DUTY_SEPR_DATE","colval":"null"},{"colname":"SPBPERS_DATA_ORIGIN","colval":"Banner"},{"colname":"SPBPERS_USER_ID","colval":"SAISUSR"},{"colname":"SPBPERS_ETHN_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_CDE","colval":"null"},{"colname":"SPBPERS_CONFIRMED_RE_DATE","colval":"null"},{"colname":"SPBPERS_ARMED_SERV_MED_VET_IND","colval":"N"}];
				$http.post('getColumnValuesForRec', $.param({rowid:$scope.record2, tableName:$scope.SelectedpidmTablename}), {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					$scope.columnsRecord2 = data;
					$scope.origcolumnsRecord2 = $.extend(true, $scope.origcolumnsRecord2, $scope.columnsRecord2);
					
				})
				
			}
			
			$scope.mergeRecord = function(){
				$scope.pidmColDataDto = {
						pidmDataCol1 :$scope.columnsRecord1 ,
						pidmDataCol2 :$scope.columnsRecord2 , 
						tableName:$scope.SelectedpidmTablename, 
						recordId2:$scope.record2,
						recordId1:$scope.record1
				}
				
				$http.post('mergeRecords', $.customParam($scope.pidmColDataDto), {
						
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				}).success(function(data) {
					alert("here");
					
				})
			}
			
			$scope.cancel= function(){
				$rootScope.addmergeWindow = false;
			}
			
		})