'use strict';

myApp.factory('DeleteService',function($resource){
	var data =  $resource('http://localhost:24149/users/:user',{user: '@user'},{
		delete:{
			method: 'DELETE'
		}
	});

	return data;
});
