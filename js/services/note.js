angular.module('NoteWrangler')
.factory('Note', ['$resource',function NoteFactory($resource) {
    /*
  return {
    all:function( ){
      return $http({method: 'GET', url: '/notes'});      
    }
  };
  */
    return $resource('/notes',{},{
        tweetIt:{
            method: 'PUT'
        }
    });
}]);
