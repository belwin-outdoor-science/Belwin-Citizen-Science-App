myApp.service('StaffService', ['$http', function ($http) {
    console.log('StaffService is loaded');
  
    var self = this;
    self.userInfo = {};
    
  
    self.getUserInfo = function () {
      $http.get('/dashboard').then(function (response) {
        self.userInfo = response.data;
        // console.log('get route successful: ', self.userInfo);
      });
    }

    self.getUsers = function () {
      $http.get('/user/users').then(function(response) {
        self.users = response.data;
        console.log('got users ', self.users);
      });
    }

    self.deleteUser = function (userId) {
      console.log('delete clicked', userId);
      $http({
          method: 'DELETE',
          url: '/user/' + userId
      }).then(function(response){
          self.getUsers();
      })
  }

  }]);
  