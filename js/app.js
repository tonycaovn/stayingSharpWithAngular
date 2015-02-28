angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: ['$http',function($http){
        var thisCtrl = this;
        $http({method:'get',url:'/notes'})
        .success(function(response){
          thisCtrl.notes = response;
        });
      }],
      controllerAs :'notesCtrl'
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
}]);