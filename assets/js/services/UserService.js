myBlogApp.factory('UserService', ['$http', function($http){

  return {
    login: function(email, password, callback) {

      // self == login parent function
      var self = this;
      var loginData = {email:email, password:password};

      $http.post('/api/auth', loginData)
        .success(function(data) {
          if (data && data.user) {
            self.currentUser = data.user
          } else {
            self.currentUser = false;
          }
          callback(null, data);
        }).error(function(err) {
          callback(err);
        })
    },
    logout: function(callback) {
      var self = this;
      $http.delete('/api/auth')
        .success(function(data) {
          self.currentUser = false;
          callback(null, data);
        }).error(function(err) {
          callback(err);
        })
    },
    check: function(callback) {
      var self = this;
      $http.get('/api/auth')
      // same as login info!
        .success(function(data) {
          if (data && data.user) {
            self.currentUser = data.user
          } else {
            self.currentUser = false;
          }
          callback(null, data);
        }).error(function(err) {
          callback(err);
        })
    }
  }
}])