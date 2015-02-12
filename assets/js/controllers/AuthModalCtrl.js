myBlogApp.controller('AuthModalCtrl', ['$scope', '$modalInstance', 'UserService', function($scope, $modalInstance, UserService){

  $scope.email = 'claire.lyles@gmail.com';

  $scope.login = function() {
    UserService.login($scope.email,$scope.password,function(err, data){
      if(err) {
        alert(err);
      } else if (data.user) {
        $modalInstance.close();
      } else {
        alert(data.error)
      }
    });
  }

}]);