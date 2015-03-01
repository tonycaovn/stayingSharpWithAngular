angular.module('NoteWrangler')
.factory('Tweetable', ['$http', function TweetableFactory($http) {
  var characterLength = 144;
  return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength: characterLength
      }
    });
  };
}]);
/*
// Provider version
angular.module('NoteWrangler')
.provider('Tweetable', function TweetableProvider() {
  var characterLength = 144;
  this.setLength = function(size){
    characterLength = size;
  };
  this.$get = ['$http',function($http){
    return function(potentialTweet) {
      return $http({
        method: 'POST',
        url: 'http://gentle-spire-1153.herokuapp.com/tweet',
        data: {
          description: potentialTweet,
          maxLength: characterLength
        }
      });
    };
  }];
});

*/