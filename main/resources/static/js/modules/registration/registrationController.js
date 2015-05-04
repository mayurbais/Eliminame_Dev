
angular.module('Registration',['ui.router','cacheMethodModule'])
.directive('passwordConfirm', function ($parse) {
	 return {
	    restrict: 'A',
	    scope: {
	      matchTarget: '=',
	    },
	    require: 'ngModel',
	    link: function link(scope, elem, attrs, ctrl) {
	      var validator = function (value) {
	        ctrl.$setValidity('match', value === scope.matchTarget);
	        console.log(scope.matchTarget);
	        return value;
	      }
	 
	      ctrl.$parsers.unshift(validator);
	      ctrl.$formatters.push(validator);
	      
	      // This is to force validator when the original password gets changed
	      scope.$watch('matchTarget', function(newval, oldval) {
	        validator(ctrl.$viewValue);
	      });
	
	    }
	  };
	})
  .filter('passwordFilter',function(){
            return function(str,symbol){
            	alert("are u here");
                if (!symbol) symbol = '*';
                if (!str) return;
                var fixShowLength = 2;
                var maskLength,replaceSourceStr,replaceTargetStr;
                if (str.length <= fixShowLength){
                    maskLength = str.length;
                    replaceSourceStr = str;
                }else{
                    maskLength = str.length - fixShowLength;
                    replaceSourceStr = str.substr(1,maskLength);
                }
               replaceTargetStr = '';
                for (var i = 0;i < maskLength;i++) replaceTargetStr += symbol;
                str = str.replace(replaceSourceStr,replaceTargetStr);
                return str;
            }
        })
.controller('RegistrationController',
    function ($scope,$http,$location,$rootScope,cacheMethodService,$state) {
    $scope.passwordPattern = /(?=^.{8,12}$)(?=.*\d)(?![.\n])(?=.*[a-z]).*$/;
    $scope.submit = function(isValid){
        if (!isValid) return;
        cacheMethodService.saveCache('tmpParameter',{
            'username': $scope.user.name,
            'password': $scope.user.password,
            'email': $scope.user.email
        });
        $http.post('register', $.param($scope.user), {
			headers : {
				"content-type" : "application/x-www-form-urlencoded"
			}
		}).success(function(data) {
			
			 //alert('our form is amazing');
		})
		
		$location.path("/");
        //alert('our form is amazing');
    };
    $scope.getFormGroupClass = function(groupControls){
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