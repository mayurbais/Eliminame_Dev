'user.strict'
angular.module('CreateStudent')
 
.controller('CreateStudentController',
    function ($scope,$http,$location,$rootScope,cacheMethodService,$state) {
    $scope.passwordPattern = /(?=^.{8,12}$)(?=.*\d)(?![.\n])(?=.*[a-z]).*$/;
    $scope.submit = function(isValid){
        if (!isValid) return;
        $scope.student.address =  $scope.address;
        alert("adf" + $scope.student.address);
        $http.post('createStudent', $.customParam($scope.student), {
			headers : {
				"content-type" : "application/x-www-form-urlencoded"
			}
		}).success(function(data) {
			
			 //alert('our form is amazing');
		})
//		
//		$location.path("/");
        //alert('our form is amazing');
    };
    
    
   var i=0;
    $scope.getFormGroupClass = function(groupControls){
    	console.log(groupControls + "" + i++);
        if (!groupControls.$dirty) return;//If the value is not changed, Controls No action
        return groupControls.$invalid?'form-group has-error has-feedback':'form-group has-success has-feedback';
    }
    $scope.getGlyphIconClass = function(groupControls){
        return groupControls.$valid?'glyphicon glyphicon-ok form-control-feedback':'glyphicon glyphicon-remove form-control-feedback';
    }
    $scope.isRequired = function(groupControls){
        return groupControls.$error.required && groupControls.$dirty;
    }
});