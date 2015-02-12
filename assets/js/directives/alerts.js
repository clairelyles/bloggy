// <alerts></alerts> <--- goal
// modularizing <alerts> in this directive

myBlogApp.directive('alerts', function() {
  return {
    restrict: 'E',
    controller: ['$scope','AlertService', function($scope, AlertSerivce) {
      $scope.getAlerts = function() {
        return AlertSerivce.get();
      }
      $scope.closeAlert = function(idx) {
        AlertSerivce.remove(idx);
      }
    }],
    // defined alerts type and text in the $scope.alerts object above
    replace:true,
    template:'<alert ng-repeat="alert in getAlerts()" type="{{alert.type}}" close="closeAlert($index)">{{alert.text}}</alert>'
  }
})