myBlogApp.controller('MainNavCtrl', ['$scope', '$location', '$modal', 'UserService', function($scope, $location, $modal, UserService){
  $scope.navCollapsed = true;

  // watching for whenever something changes in UserService, this function is ran
  $scope.UserService = UserService;
  $scope.$watchCollection('UserService', function(){ // watch function is triggered by UserService success callback
    $scope.currentUser = UserService.currentUser;
  });

  $scope.isActive = function(url) {
    // inject $location to see and set location
    return url == $location.path();
  };

  // SETS THE URL TO SEARCH IT >> RECIEVE IT IN THE HOME CONTROLLER
  $scope.search = function() {
    $location.path('/');
    $location.search('q',$scope.searchTerm)
    // alert('searchTerm '+ $scope.searchTerm);
  };

  $scope.showLogin = function() {
    $modal.open({
      templateUrl: '/views/authModal.html',
      controller: 'AuthModalCtrl'
    })
  };

  $scope.showSignup = function() {
    $modal.open({
      templateUrl: '/views/authModal.html',
      controller: 'AuthModalCtrl'
    })
  };

  $scope.logout = function() {
    // connects to UserService where we define the deletion of the session
    UserService.logout(function(err,data) {

    })
  }


}]);