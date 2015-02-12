myBlogApp.controller('PostNewCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

  $scope.createPost = function() {

    var data = {
      title:$scope.title,
      body:$scope.body
    };

    $http.post('/api/post',data).success(function(data){
      $scope.alert='Your post has been created';
      $scope.title='';
      $scope.body='';
    }).error(function(err){
      alert('error! was ', err);
    })

  }

}]);