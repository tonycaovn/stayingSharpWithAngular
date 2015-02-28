angular.module('NoteWrangler').directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    scope:{
      header:'=',
      description:'='
    },
    controller: function($scope) {
      $scope.header = 'Note Title';
      $scope.description = 'A lovely note description.';
    },
    link:function(scope,element,attrs){
      if(scope.tweeted)element.addClass('tweeted');
    }
  };
}]);
