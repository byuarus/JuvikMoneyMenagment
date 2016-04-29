'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope,$location) {
	$scope.fb_login = function(){
	    FB.login(function(response) {
	        if (response.authResponse) {
	            var access_token = response.authResponse.accessToken; //get access token
	            var user_id = response.authResponse.userID; //get FB UID
				$location.path('/view2');
				$scope.$apply();
	        } else {
	            //user hit cancel button
	        }
	    }, {
	        scope: 'email'
	    });
	}
})
.run(['$rootScope', '$window', 
  function($rootScope, $window) {

  $rootScope.user = {};

  $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({ 

      appId: '1621898574716044', 

      /* 
       Adding a Channel File improves the performance 
       of the javascript SDK, by addressing issues 
       with cross-domain communication in certain browsers. 
      */

      channelUrl: 'app/channel.html', 

      /* 
       Set if you want to check the authentication status
       at the start up of the app 
      */

      status: true, 

      /* 
       Enable cookies to allow the server to access 
       the session 
      */

      cookie: true, 

      /* Parse XFBML */

      xfbml: true 
    });


  };


  (function(d){
    // load the Facebook javascript SDK

    var js, 
    id = 'facebook-jssdk', 
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script'); 
    js.id = id; 
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));

}]);