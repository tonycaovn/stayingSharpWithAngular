angular.module('NoteWrangler')
.controller('NotesShowController', ['$routeParams','$http',function($routeParams,$http) {
    thisCtrl = this;
  $http({method:'get',url:'/notes/'+$routeParams.id})
  .success(function(response){
    thisCtrl.note = response;
  });
}]);
