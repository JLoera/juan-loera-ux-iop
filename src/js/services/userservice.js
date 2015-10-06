'use strict';

myApp.factory('UserService',function($resource){
	return $resource('http://localhost:24149/users/:user',{user: '@user'});
});
