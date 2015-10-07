'use strict';

myApp.factory('UserFactory',function($resource){
	return $resource('http://localhost:24149/users/:user',
  {
    user: '@user'
  },
  {
    update: {method: 'PUT'}
  });
});

myApp.service('UserService', function(UserFactory) {
  function getUsers() {
    return UserFactory.query().$promise;
  }
	function addUser(data){
		return UserFactory.save(data).$promise;
	}
  function updateUser(id, data){
		return UserFactory.update(id, data).$promise;
	}
	function deleteUser(id){
		return UserFactory.delete(id).$promise;
	}

  return {
    getUsers: getUsers,
		addUser: addUser,
    updateUser: updateUser,
		deleteUser: deleteUser
  };
});
