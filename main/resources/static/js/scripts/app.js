// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('UserPreference', []);
angular.module('Registration', []);
angular.module('Student', []);
angular.module('CreateStudent', []);
angular.module("BsTableApplication", ["bsTable"]);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'UserPreference',
    'Merge',
    'Registration',
    'Student',
    'CreateStudent',
    'ngRoute',
    'ngCookies',
	'ngGrid',
	'dialogs.main',
	'ui.bootstrap'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'js/modules/authentication/views/login.html',
          })
       
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'js/modules/home/views/home.html'
        })
        .when('/registration', {
            controller: 'RegistrationController',
            templateUrl: 'js/modules/registration/views/registration.html'
        })
        .when('/student', {
            controller: 'StudentController',
            templateUrl: 'js/modules/student/views/student.html'
        })
        .when('/studentList', {
            controller: 'StudentListController',
            templateUrl: 'js/modules/student/views/studentList.html'
        })
        .when('/createStudent', {
            controller: 'CreateStudentController',
            templateUrl: 'js/modules/student/views/createStudent.html'
        })
        
        .when('/userPref', {
            controller: 'UserPrefController',
            templateUrl: 'js/modules/userpref/views/userpref.html'
        })
        
         /*.when('/merge', {
            controller: 'MergeController',
            templateUrl: 'js/modules/merge/view/merge.html'
        })*/
        
        
        .otherwise('/');
}]);
