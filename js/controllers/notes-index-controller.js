angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note','Tweetable',function($scope, Note, Tweetable) {
  /*
  Note.all().success(function(data) {
    $scope.notes = data;
  });
*/
  $scope.note = Note.query();
  $scope.tweetThatNote = function(item){
    Tweetable(item).success(function(data){
        console.log(data);  
    });
  };
}]);
