'use strict';

myApp.factory('UpdateService',function($resource){
	var data =  $resource('http://localhost:24149/users/:user',{user: '@user'},{
		update:{
			method: 'PUT'
		}
	});

	return data;
});
