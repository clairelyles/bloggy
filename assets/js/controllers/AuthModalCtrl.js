myBlogApp.controller('AuthModalCtrl', ['$scope', '$modalInstance', 'UserService', '$http', 'AlertService', function($scope, $modalInstance, UserService, $http, AlertService){

  $scope.loginInfo = {email:'',password:''}

  $scope.login = function() {
    console.log($scope);
    UserService.login($scope.loginInfo.email,$scope.loginInfo.password,
      function(err, data){
        if(err) {
          alert(err);
        } else if (data.user) {
          $modalInstance.close();
        } else {
          alert(data.error)
        }
    });
  };

  $scope.signupInfo = {firstName:'',lastName:'',email:'',password:'',passwordConfirmation:''}

  $scope.signup = function() {

    if ($scope.signupInfo.password != $scope.signupInfo.passwordConfirmation) {
      alert('your password has not been confirmed');
      return;
    }

    var signupData = {
      email: $scope.signupInfo.email,
      password: $scope.signupInfo.password,
      firstName: $scope.signupInfo.firstName,
      lastName: $scope.signupInfo.lastName
    };

    $http.post('/api/user',signupData)
      .success(function(data) {
        AlertService.add('success','you have been signed in');
        // if (data.user) {
        //   $modalInstance.close();
        // }
      }).error(function(err) {
        alert(err);
      })
  }

}]);