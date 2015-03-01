angular.module('NoteWrangler', ['ngRoute','ngResource'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: ['$http','$scope',function($http,$scope){
        $http({method:'get',url:'/notes'})
        .success(function(response){
          $scope.notes = response;
        });
      }]
  })
  .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
  })
  .when('/notes/new', {
    templateUrl: 'templates/pages/notes/edit.html',
    controller: 'NotesCreateController',
    controllerAs: 'notesCreateCtrl'
  })
  .when('/notes/:id', {
    templateUrl: 'templates/pages/notes/show.html',
    controller: 'NotesShowController'
  })
  .when('/', {
      redirectTo: '/users'
  })
  .otherwise({
    redirectTo: '/notes'
    });
}])
.config(function(TweetableProvider){
  TweetableProvider.setLength(40);
});