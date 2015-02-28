angular.module('NoteWrangler')
.controller('NotesShowController', ['$routeParams','$http','$scope',function($routeParams, $http, $scope) {
  $http({method:'get',url:'/notes/'+$routeParams.id})
  .success(function(response){
    $scope.note = response;
  });
}]);
